import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button'; // Asegúrate de usar las llaves
import { LogoCarouselComponent } from '../logo-carousel/logo-carousel.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule,CommonModule,RouterModule,LogoCarouselComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Corrige a 'styleUrls'
})
export class HeroComponent {}
