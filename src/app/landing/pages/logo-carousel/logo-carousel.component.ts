
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-carousel.component.html',
  styleUrls: ['./logo-carousel.component.css'],
})
export class LogoCarouselComponent {
  logos1 = [
    { src: 'assets/logos/emp16.png', alt: 'empresa16' },
    { src: 'assets/logos/emp17.png', alt: 'empresa17' },
    { src: 'assets/logos/emp18.png', alt: 'empresa18' },
    { src: 'assets/logos/emp19.png', alt: 'empresa19' },
    { src: 'assets/logos/emp20.png', alt: 'empresa20' },
    { src: 'assets/logos/emp1.png', alt: 'empresa1' },
    { src: 'assets/logos/emp2.png', alt: 'empresa2' },
    { src: 'assets/logos/emp3.png', alt: 'empresa3' },
    { src: 'assets/logos/emp4.png', alt: 'empresa4' },
    { src: 'assets/logos/emp5.png', alt: 'empresa5' },
    { src: 'assets/logos/emp6.png', alt: 'empresa6' },
    { src: 'assets/logos/emp7.png', alt: 'empresa7' },
    { src: 'assets/logos/emp8.png', alt: 'empresa8' },
    { src: 'assets/logos/emp9.png', alt: 'empresa9' },
    { src: 'assets/logos/emp10.png', alt: 'empresa10' },
    { src: 'assets/logos/emp11.png', alt: 'empresa11' },
    { src: 'assets/logos/emp12.png', alt: 'empresa12' },
    { src: 'assets/logos/emp13.png', alt: 'empresa13' },
    { src: 'assets/logos/emp14.png', alt: 'empresa14' },
    { src: 'assets/logos/emp15.png', alt: 'empresa15' },
  ];

  logos2 = [
    { src: 'assets/logos/emp21.png', alt: 'empresa21' },
    { src: 'assets/logos/emp22.png', alt: 'empresa22' },
    { src: 'assets/logos/emp23.png', alt: 'empresa23' },
    { src: 'assets/logos/emp24.jpg', alt: 'empresa24' },
    { src: 'assets/logos/emp25.png', alt: 'empresa25' },
    { src: 'assets/logos/emp26.png', alt: 'empresa26' },
    { src: 'assets/logos/emp27.png', alt: 'empresa27' },
    { src: 'assets/logos/emp28.jpg', alt: 'empresa28' },
    { src: 'assets/logos/emp29.jpg', alt: 'empresa29' },
    { src: 'assets/logos/emp30.png', alt: 'empresa30' },
    { src: 'assets/logos/emp31.png', alt: 'empresa31' },
    { src: 'assets/logos/emp32.png', alt: 'empresa32' },
    { src: 'assets/logos/emp33.jpg', alt: 'empresa33' },
    { src: 'assets/logos/emp34.png', alt: 'empresa34' },
    { src: 'assets/logos/emp35.png', alt: 'empresa35' },
    { src: 'assets/logos/emp36.png', alt: 'empresa36' },
    { src: 'assets/logos/emp37.png', alt: 'empresa37' },
    { src: 'assets/logos/emp38.jpg', alt: 'empresa38' },
    { src: 'assets/logos/emp39.png', alt: 'empresa39' },
    { src: 'assets/logos/emp40.png', alt: 'empresa40' },
  ];
}
