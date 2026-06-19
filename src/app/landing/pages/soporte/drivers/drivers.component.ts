import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {
  printerDrivers = [
    {
      nombre: 'POS-58 Series Driver',
      link: 'https://drive.google.com/drive/folders/1K0jn0bhYGHOUku_jkj7fkl1yz2VIk7-7?usp=sharing'
    },
    {
      nombre: 'POS-80 Series Driver',
      link: 'https://drive.google.com/drive/folders/1x3Gitb4gcUUc4UxhJRiEP8Dz10ao6HsD?usp=sharing'
    }
  ];


  toolDrivers = [
    // {
    //   nombre: 'Kallpa Printing Bridge',
    //   link: 'https://drive.google.com/drive/folders/1jDAohetP_nEOyP-K0vugFILX_txU_ea8?usp=sharing'
    // },
    // {
    //   nombre: 'Kallpa Print Setup',
    //   link: 'https://drive.google.com/drive/folders/1ebRJI66yg9POjQFvAFUYSOyeQVrW3Fzb?usp=sharing'
    // },

    {
      nombre: 'Kallpa Print Setup 1.2.3',
      link: 'https://drive.google.com/file/d/1yQo9pcuseYXAuplDS-gkjt5LlNOplPQn/view?usp=sharing'
    }

  ];
}
