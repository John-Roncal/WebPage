import { Component } from '@angular/core';
import { plans } from '../../../data/plans';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

type BillingView = 'monthly' | 'quarterly' | 'annual';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  // Mensual
  plans = plans;
  show: number = 1;

  // Conmutador mensual / trimestral / anual
  billing: BillingView = 'monthly';

  responsiveOptions: any[] = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 }
  ];

  // Colores diferenciados por plan
  planColors: Record<string, string> = {
    emp: 'tw-from-blue-500 tw-to-cyan-400',
    cre: 'tw-from-violet-500 tw-to-purple-400',
    fam: 'tw-from-emerald-500 tw-to-teal-400'
  };

  // Trimestral
  quarterlyPlans = [
    { id: 'emp', title: 'Emprende', price: 75, comprobantes: 300, highlight: 'empezar y validar tu negocio' },
    { id: 'cre', title: 'Crece+', price: 150, comprobantes: 1000, highlight: 'equipos en crecimiento' },
    { id: 'fam', title: 'MiFamilia', price: 300, comprobantes: 3000, highlight: 'pymes con más movimiento' }
  ];
  quarterlyShow: number = 1;

  // Anual
  annualPlans = [
    { id: 'emp', title: 'Emprende', price: 300, comprobantes: 300, highlight: 'empezar y escalar tu negocio' },
    { id: 'cre', title: 'Crece+', price: 600, comprobantes: 1000, highlight: 'equipos con visión a largo plazo' },
    { id: 'fam', title: 'MiFamilia', price: 1200, comprobantes: 3000, highlight: 'pymes que buscan consolidarse' }
  ];
  annualShow: number = 1;

  constructor() { }

  getPlanColor(id: string): string {
    return this.planColors[id] ?? 'tw-from-red-500 tw-to-orange-500';
  }

  changePlan(id: number) {
    this.show = id;
  }

  changeQuarterlyPlan(pageOrIndex: number) {
    this.quarterlyShow = pageOrIndex;
  }

  changeAnnualPlan(pageOrIndex: number) {
    this.annualShow = pageOrIndex;
  }

  changeBilling(view: BillingView) {
    this.billing = view;
    if (view === 'monthly') {
      this.show = 1;
    } else if (view === 'quarterly') {
      this.quarterlyShow = 1;
    } else {
      this.annualShow = 1;
    }
  }
}