import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../footer/footer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  TUTORIAL_FLOWS,
  Tutorial,
  TutorialFlow,
  DeviceType,
  MobileCategory,
} from './tutoriales.data';

type Step = 'device' | 'category' | 'index' | 'player';

const STORAGE_KEY = 'kallpa_tutoriales_progress';

interface ProgressState {
  device: DeviceType | null;
  category: MobileCategory | null;
  currentIndex: number;
  viewedIndices: number[];
  completed: boolean;
  acceptedTerms: boolean;
}

@Component({
  selector: 'app-tutoriales',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './tutoriales.component.html',
  styleUrl: './tutoriales.component.css',
})
export class TutorialesComponent implements OnInit {
  // ── Wizard state ──────────────────────────────────────────────
  step: Step = 'device';
  selectedDevice: DeviceType | null = null;
  selectedCategory: MobileCategory | null = null;

  // ── Modals & Terms ────────────────────────────────────────────
  showTermsModal = false;
  showRewardModal = false;
  acceptedTerms = false;
  acceptedTermsTemp = false;

  // ── Active flow & player ──────────────────────────────────────
  activeFlow: TutorialFlow | null = null;
  currentIndex = 0;
  
  // ── Progress tracking ─────────────────────────────────────────
  viewedIndices = new Set<number>();
  isFlowCompleted = false;

  constructor(private sanitizer: DomSanitizer) {}

  get currentTutorial(): Tutorial | null {
    return this.activeFlow?.tutorials[this.currentIndex] ?? null;
  }
  
  get viewableCount(): number {
    return this.activeFlow?.tutorials.filter(t => !!t.videoUrl).length || 0;
  }

  get viewedCount(): number {
    return this.viewedIndices.size;
  }

  get progress(): number {
    if (!this.activeFlow || this.viewableCount === 0) return 0;
    return Math.round((this.viewedCount / this.viewableCount) * 100);
  }

  // ── Exposed data ──────────────────────────────────────────────
  flows = TUTORIAL_FLOWS;

  ngOnInit(): void {
    this.restoreProgress();
  }

  // ── Terms & Modals ────────────────────────────────────────────
  toggleTerms(event: Event): void {
    this.acceptedTermsTemp = (event.target as HTMLInputElement).checked;
  }

  acceptAndContinue(): void {
    this.acceptedTerms = true;
    this.saveProgress();
  }

  // ── Device selection ─────────────────────────────────────────
  selectDevice(device: DeviceType): void {
    this.selectedDevice = device;
    if (device === 'pc') {
      this.activeFlow = this.flows.find((f) => f.device === 'pc') ?? null;
      this.resetFlowProgress();
      this.step = 'index';
      this.saveProgress();
    } else {
      this.step = 'category';
    }
  }

  // ── Category selection (mobile) ───────────────────────────────
  selectCategory(cat: MobileCategory): void {
    this.selectedCategory = cat;
    this.activeFlow =
      this.flows.find((f) => f.device === 'mobile' && f.category === cat) ?? null;
    this.resetFlowProgress();
    this.step = 'index';
    this.saveProgress();
  }

  private resetFlowProgress(): void {
    this.currentIndex = 0;
    this.viewedIndices.clear();
    this.isFlowCompleted = false;
  }

  // ── Index → Player ────────────────────────────────────────────
  startFlow(): void {
    if (this.viewedCount > 0 && this.activeFlow) {
      const firstUnwatched = this.activeFlow.tutorials.findIndex((t, i) => t.videoUrl && !this.viewedIndices.has(i));
      this.currentIndex = firstUnwatched !== -1 ? firstUnwatched : 0;
    } else {
      this.currentIndex = 0;
    }
    
    this.markAsViewed(this.currentIndex);
    this.step = 'player';
    this.saveProgress();
  }

  jumpToTutorial(index: number): void {
    if (!this.activeFlow) return;
    const tut = this.activeFlow.tutorials[index];
    if (!tut.videoUrl) return; 
    this.currentIndex = index;
    this.markAsViewed(index);
    this.step = 'player';
    this.saveProgress();
  }

  // ── Player navigation ─────────────────────────────────────────
  goNext(): void {
    if (!this.activeFlow) return;
    if (this.currentIndex < this.activeFlow.tutorials.length - 1) {
      this.currentIndex++;
      while(this.currentIndex < this.activeFlow.tutorials.length && !this.activeFlow.tutorials[this.currentIndex].videoUrl) {
         this.currentIndex++;
      }
      if(this.currentIndex < this.activeFlow.tutorials.length) {
         this.markAsViewed(this.currentIndex);
      } else {
         this.currentIndex = this.activeFlow.tutorials.length - 1; 
      }
      this.saveProgress();
    }
  }

  goPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      while(this.currentIndex > 0 && !this.activeFlow?.tutorials[this.currentIndex].videoUrl) {
         this.currentIndex--;
      }
      this.saveProgress();
    }
  }

  goToIndex(): void {
    this.step = 'index';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  finishFlow(): void {
    this.markAsViewed(this.currentIndex);
    this.step = 'index';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isLast(): boolean {
    if (!this.activeFlow) return false;
    const remainingViewable = this.activeFlow.tutorials.slice(this.currentIndex + 1).some(t => !!t.videoUrl);
    return !remainingViewable;
  }

  isFirst(): boolean {
    return this.currentIndex === 0;
  }

  hasViewed(index: number): boolean {
    return this.viewedIndices.has(index);
  }

  private markAsViewed(index: number): void {
    if (!this.activeFlow || !this.activeFlow.tutorials[index]?.videoUrl) return;
    this.viewedIndices.add(index);
    if (this.viewableCount > 0 && this.viewedIndices.size >= this.viewableCount) {
      if (!this.isFlowCompleted) {
        this.isFlowCompleted = true;
        this.showRewardModal = true; 
      }
    }
  }

  // ── Reward Claim ──────────────────────────────────────────────
  claimReward(): void {
    const message = encodeURIComponent('Hola, he completado el módulo de tutoriales de Kallpa Facturación y deseo reclamar mi recompensa especial. 🎁');
    const url = `https://wa.me/51944027170?text=${message}`;
    window.open(url, '_blank');
  }

  // ── Reset ─────────────────────────────────────────────────────
  resetAll(): void {
    this.step = 'device';
    this.selectedDevice = null;
    this.selectedCategory = null;
    this.activeFlow = null;
    this.showTermsModal = false;
    this.showRewardModal = false;
    this.acceptedTerms = false;
    this.acceptedTermsTemp = false;
    this.resetFlowProgress();
    localStorage.removeItem(STORAGE_KEY);
  }

  // ── LocalStorage progress ─────────────────────────────────────
  private saveProgress(): void {
    const state: ProgressState = {
      device: this.selectedDevice,
      category: this.selectedCategory,
      currentIndex: this.currentIndex,
      viewedIndices: Array.from(this.viewedIndices),
      completed: this.isFlowCompleted,
      acceptedTerms: this.acceptedTerms
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  private restoreProgress(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const state: ProgressState = JSON.parse(raw);
      if (!state.device) return;

      this.selectedDevice = state.device;
      this.selectedCategory = state.category ?? null;
      this.acceptedTerms = state.acceptedTerms || false;
      this.acceptedTermsTemp = this.acceptedTerms;

      if (state.device === 'pc') {
        this.activeFlow = this.flows.find((f) => f.device === 'pc') ?? null;
      } else if (state.category) {
        this.activeFlow =
          this.flows.find(
            (f) => f.device === 'mobile' && f.category === state.category
          ) ?? null;
      }

      if (this.activeFlow) {
        const max = this.activeFlow.tutorials.length - 1;
        this.currentIndex = Math.min(state.currentIndex ?? 0, max);
        this.viewedIndices = new Set(state.viewedIndices || []);
        this.isFlowCompleted = state.completed || false;
        
        this.step = 'index'; 
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  // ── Template helpers ──────────────────────────────────────────
  getYoutubeEmbedUrl(url: string): SafeResourceUrl {
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    const finalUrl = match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
      : url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
  }
}