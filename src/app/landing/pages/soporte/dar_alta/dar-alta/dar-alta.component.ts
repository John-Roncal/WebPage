import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-dar-alta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule,FooterComponent],
  templateUrl: './dar-alta.component.html',
  styleUrl: './dar-alta.component.css'
})
export class DarAltaComponent {
 altaItems = [
    {
      titulo: 'VINCULACION PSE',
      pdfUrl: 'https://drive.google.com/file/d/1gH4HOpzdkiD0OwiFVuUbno0AEgG7JMhu/view?usp=drive_link',
      videoDisponible: true,
      videoUrl: 'https://drive.google.com/file/d/1E_umukCHwoWipp-c64UhDTq9DFO5SBjE/view?usp=sharing',
      icono: 'assets/pse.svg'
    },
    {
      titulo: 'VINCULACION OSE',
      pdfUrl: 'https://drive.google.com/file/d/1EZKWNLpg9qZVtl_SwRL0GMvHumQWkd9k/view?usp=drive_link',
      videoDisponible: true,
      videoUrl: 'https://drive.google.com/file/d/1uze2JIJd1I1m8mGABTHiYXmmo2hwe-vZ/view?usp=drive_link',
      icono: 'assets/ose.svg'
    }
  ];
}