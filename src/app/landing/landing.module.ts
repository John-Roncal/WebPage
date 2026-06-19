import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ConsultaComponent } from './pages/consulta/consulta/consulta.component';
import { MainComponent } from './pages/main/main.component';
import { DemoComponent } from './pages/demo/demo.component';
import { TermsComponent } from '../auth/pages/terms/terms.component';
import { PreguntasFrecuentesComponent } from './pages/soporte/preguntas/preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialesComponent } from './pages/soporte/tutoriales/tutoriales/tutoriales.component';
import { DarAltaComponent } from './pages/soporte/dar_alta/dar-alta/dar-alta.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { DriversComponent } from './pages/soporte/drivers/drivers.component';
import { LogoCarouselComponent } from './pages/logo-carousel/logo-carousel.component';
import { FacturacionElectronicaComponent } from './pages/servicios/facturacion-electronica/facturacion-electronica.component';
import { LibroReclamacionesComponent } from './pages/libro-reclamaciones/libro-reclamaciones.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HerramientasApoyoComponent } from './pages/herramientas-apoyo/herramientas-apoyo.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'demo', component: DemoComponent },
      { path: 'preguntas', component: PreguntasFrecuentesComponent },
      { path: 'tutoriales', component: TutorialesComponent },
      { path: 'dar-alta', component: DarAltaComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'accesorios', component: AccesoriosComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'carrusel', component: LogoCarouselComponent },
      {path: 'apoyo', component: HerramientasApoyoComponent },
      // { path: 'facturacion-electronica', component: FacturacionElectronicaComponent },
      { path: 'footer', component: FooterComponent }
    ]
  },
];



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes) // Importa RouterModule y pasa las rutas
  ]
})
export class LandingModule { }
