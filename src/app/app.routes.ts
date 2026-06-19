import { Routes } from '@angular/router';
import { PrivacyComponent } from './auth/pages/privacy/privacy.component';
import { LayoutComponent } from './landing/pages/layout/layout.component';
import { TermsComponent } from './auth/pages/terms/terms.component';
import { LibroReclamacionesComponent } from './landing/pages/libro-reclamaciones/libro-reclamaciones.component';

export const routes: Routes = [
    {
        path: '',
        component:LayoutComponent,
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'privacy',
        component:PrivacyComponent
    },
    {
        path: 'terms',
        component:TermsComponent
    },

    {
        path: 'libro-reclamacion',
        component:LibroReclamacionesComponent
    },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
