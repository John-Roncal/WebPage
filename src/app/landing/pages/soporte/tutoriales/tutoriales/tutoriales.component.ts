import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-tutoriales',
  standalone: true,
  imports: [CommonModule, LucideAngularModule,FooterComponent],
  templateUrl: './tutoriales.component.html',
  styleUrl: './tutoriales.component.css'
})
export class TutorialesComponent {
  tutoriales = [
    {
      titulo: 'Emitir una Boleta',
      url: 'https://www.youtube.com/shorts/NSKa6SbEchk?feature=share',
      imagen: 'assets/boleta.svg'
    },
    {
      titulo: 'Emitir Factura',
      url: 'https://www.youtube.com/shorts/Shlz4Knomuw?feature=share',
      imagen: 'assets/factura.svg'
    },
    {
      titulo: 'Emitir Nota de Venta',
      url: 'https://www.youtube.com/shorts/ZC5psMwB0Ss?feature=share',
      imagen: 'assets/nota.svg'
    },
    {
      titulo: 'Realizar Cotización',
      url: 'https://www.youtube.com/shorts/1psLNQAsw3o?feature=share',
      imagen: 'assets/cotizacion.svg'
    },
    {
      titulo: 'Nota de Crédito',
      url: 'https://www.youtube.com/shorts/y8PXkfyJjw8?feature=share',
      imagen: 'assets/credito.svg'
    },
    {
      titulo: 'Guía Remisión Pública',
      url: 'https://www.youtube.com/shorts/IhdxiEYhNos?feature=share',
      imagen: 'assets/guia.svg'
    },
    {
      titulo: 'Guía Remisión Privada',
      url: 'https://www.youtube.com/shorts/nWJWa7QO8fk?feature=share',
      imagen: 'assets/guia.svg'
    },
    {
      titulo: 'Imprimir con Ticketera',
      url: 'https://www.youtube.com/shorts/2x7n_kK_hHE?feature=share',
      imagen: 'assets/ticketera.svg'
    },
    {
      titulo: 'Conoce Kallpa Check',
      url: 'https://www.youtube.com/shorts/koo-ifm1bCw?feature=share',
      imagen: 'assets/kallpa_check.svg'
    },
  ];
}
