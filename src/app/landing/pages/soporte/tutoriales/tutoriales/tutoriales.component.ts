import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../footer/footer.component';
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

  // ── Active flow & player ──────────────────────────────────────
  activeFlow: TutorialFlow | null = null;
  currentIndex = 0;
  get currentTutorial(): Tutorial | null {
    return this.activeFlow?.tutorials[this.currentIndex] ?? null;
  }
  get progress(): number {
    if (!this.activeFlow) return 0;
    return Math.round(((this.currentIndex + 1) / this.activeFlow.tutorials.length) * 100);
  }
  get completedCount(): number {
    return this.currentIndex; // tutorials before current are "seen"
  }

  // ── Exposed data ──────────────────────────────────────────────
  flows = TUTORIAL_FLOWS;

  ngOnInit(): void {
    this.restoreProgress();
  }

  // ── Device selection ─────────────────────────────────────────
  selectDevice(device: DeviceType): void {
    this.selectedDevice = device;
    if (device === 'pc') {
      this.activeFlow = this.flows.find((f) => f.device === 'pc') ?? null;
      this.currentIndex = 0;
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
    this.currentIndex = 0;
    this.step = 'index';
    this.saveProgress();
  }

  // ── Index → Player ────────────────────────────────────────────
  startFlow(): void {
    this.currentIndex = 0;
    this.step = 'player';
    this.saveProgress();
  }

  jumpToTutorial(index: number): void {
    if (!this.activeFlow) return;
    const tut = this.activeFlow.tutorials[index];
    if (!tut.videoUrl) return; // disabled if no video yet
    this.currentIndex = index;
    this.step = 'player';
    this.saveProgress();
  }

  // ── Player navigation ─────────────────────────────────────────
  goNext(): void {
    if (!this.activeFlow) return;
    if (this.currentIndex < this.activeFlow.tutorials.length - 1) {
      this.currentIndex++;
      this.saveProgress();
    }
  }

  goPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveProgress();
    }
  }

  goToIndex(): void {
    this.step = 'index';
  }

  isLast(): boolean {
    return this.activeFlow
      ? this.currentIndex === this.activeFlow.tutorials.length - 1
      : false;
  }

  isFirst(): boolean {
    return this.currentIndex === 0;
  }

  // ── Reset ─────────────────────────────────────────────────────
  resetAll(): void {
    this.step = 'device';
    this.selectedDevice = null;
    this.selectedCategory = null;
    this.activeFlow = null;
    this.currentIndex = 0;
    localStorage.removeItem(STORAGE_KEY);
  }

  // ── LocalStorage progress ─────────────────────────────────────
  private saveProgress(): void {
    const state: ProgressState = {
      device: this.selectedDevice,
      category: this.selectedCategory,
      currentIndex: this.currentIndex,
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
        this.step = 'index'; // always land on index, let user resume
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  // ── Template helpers ──────────────────────────────────────────
  getYoutubeEmbedUrl(url: string): string {
    // Accepts full youtube URL or youtu.be short link
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
      : url;
  }
}