import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  show = false;
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showNavbar = !event.url.includes('/terms');
      });
  }

  toggle() {
    this.show = !this.show;
    document.body.style.overflow = this.show ? 'hidden' : 'auto';
  }

  verPdf(tipo: string) {
    if (tipo === 'alta1') {
      window.open(
        'https://drive.google.com/file/d/1gH4HOpzdkiD0OwiFVuUbno0AEgG7JMhu/view?usp=drive_link',
        '_blank'
      );
    } else if (tipo === 'alta2') {
      window.open(
        'https://drive.google.com/file/d/1EZKWNLpg9qZVtl_SwRL0GMvHumQWkd9k/view?usp=drive_link',
        '_blank'
      );
    }
  }
  verVideo(tipo: string) {
    if (tipo === 'pse') {
      Swal.fire({
        title: 'Video no disponible',
        text: 'Este video no está habilitado para Vinculación como PSE.',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/463/463612.png',
        imageWidth: 60,
        imageHeight: 60,
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#d33',
      });
    } else if (tipo === 'ose') {
      window.open(
        'https://drive.google.com/file/d/1uze2JIJd1I1m8mGABTHiYXmmo2hwe-vZ/view?usp=drive_link',
        '_blank'
      );
    }
  }

  showDarAltaSubmenu = false;

  toggleDarAltaSubmenu() {
    this.showDarAltaSubmenu = !this.showDarAltaSubmenu;
  }
  showSubPse = false;
  showSubOse = false;

  toggleSubAcordeon(tipo: string) {
    if (tipo === 'pse') {
      this.showSubPse = !this.showSubPse;
    } else if (tipo === 'ose') {
      this.showSubOse = !this.showSubOse;
    }
  }

  showTutorialSubmenu = false;

  toggleTutorialSubmenu() {
    this.showTutorialSubmenu = !this.showTutorialSubmenu;
  }

  verVideoTutorial(tipo: string) {
    let url = '';

    switch (tipo) {
      case 'negocio':
        url = 'https://www.youtube.com/shorts/C1n2AF5MjRY?feature=share';
        break;
      case 'boleta':
        url = 'https://www.youtube.com/shorts/NSKa6SbEchk?feature=share';
        break;
      case 'nota':
        url = 'https://www.youtube.com/shorts/ZC5psMwB0Ss?feature=share';
        break;
      case 'factura':
        url = 'https://www.youtube.com/shorts/Shlz4Knomuw?feature=share';
        break;
      case 'cotizacion':
        url = 'https://www.youtube.com/shorts/1psLNQAsw3o?feature=share';
        break;
      case 'notacredito':
        url = 'https://www.youtube.com/shorts/y8PXkfyJjw8?feature=share';
        break;
      case 'personalizalogo':
        url = 'https://www.youtube.com/shorts/VpMCOL_eakc?feature=share';
        break;
      case 'guiaremision_publica':
        url = 'https://www.youtube.com/shorts/IhdxiEYhNos?feature=share';
        break;
      case 'guiaremision_privada':
        url = 'https://www.youtube.com/shorts/nWJWa7QO8fk?feature=share';
        break;
      case 'imprimir_ticketera':
        url = 'https://www.youtube.com/shorts/2x7n_kK_hHE?feature=share';
        break;
      case 'kallpa_check':
        url = 'https://www.youtube.com/shorts/koo-ifm1bCw?feature=share';
        break;
      default:
        Swal.fire({
          title: 'Video no disponible',
          text: 'Este video no está habilitado para Vinculación como PSE.',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/463/463612.png',
          imageWidth: 60,
          imageHeight: 60,
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#d33',
        });

        return;
    }

    window.open(url, '_blank');
    this.toggle(); // Cierra el menú móvil
  }

  showGuiaRemisionSubmenu = false;

  toggleGuiaRemisionSubmenu() {
    this.showGuiaRemisionSubmenu = !this.showGuiaRemisionSubmenu;
  }

  submit(event: Event) {
  event.preventDefault();

    const mensaje = `
    ¡Hola!
    Estoy interesado(a) en solicitar una cita para una demostración del sistema de facturación electrónica.
    Por favor, contáctame. ¡Gracias!
      `;

    const url = `https://wa.me/51983180125?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }


  openKallpaApi() {
  window.open(
    'https://kallpa.gitbook.io/kallpa-api',
    '_blank',
    'noopener,noreferrer'
  );
}

}
