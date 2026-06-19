import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FacturationComponent } from '../facturation/facturation.component';
import { PlansComponent } from '../plans/plans.component';
import { WhatsappButtonComponent } from '../../../shared/components/whatsapp-button/whatsapp-button.component';
import { AccesoriosComponent } from "../accesorios/accesorios.component";
import { LogoCarouselComponent } from "../logo-carousel/logo-carousel.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, FacturationComponent, PlansComponent, WhatsappButtonComponent, AccesoriosComponent, LogoCarouselComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
