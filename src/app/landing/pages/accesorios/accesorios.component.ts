import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Footer } from 'primeng/api';
import { FooterComponent } from '../footer/footer.component';

interface Producto {
  id: number;
  nombre: string;
  tipo: 'Impresora' | 'Promoción' | 'Contómetros';
  descripcion: string;
  caracteristicas: string[];
  precio: number;
  precioNormal?: number;
  imagen: string;
  imagenContometro?: string;
  paquetesContometro?: number;
  compatibilidad?: string[];
  rollosGratis?: number;
}

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule,FooterComponent],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css'
})
export class AccesoriosComponent implements OnInit {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Impresora Termica 58MM BlueTooth FD-582',
      tipo: 'Impresora',
      descripcion: "Impresora térmica portátil con conectividad Bluetooth y USB-C. Precio especial exclusivo para usuarios del sistema. Incluye 3 rollos gratis.",
      caracteristicas: [
        "Conectividad: Bluetooth y USB-C",
        "Batería recargable",
        "Compatibilidad: Android, iOS, Windows, macOS (ESC/POS)",
        "3 rollos de contómetros GRATIS",
        "Límite: 1 unidad por usuario"
      ],
      precio: 120.00,
      precioNormal: 180.00,
      imagen: 'assets/impresora.png',
      rollosGratis: 3,
      compatibilidad: ["Android", "iOS", "Windows", "macOS"]
    },
    {
      id: 2,
      nombre: 'Pack Impresora Termica 58MM BlueTooth FD-582 + 10 Rollos',
      tipo: 'Promoción',
      descripcion: "Pack con impresora FD-582 y 10 rollos de contómetros (incluye los 3 rollos gratis). Precio especial para usuarios.",
      caracteristicas: [
        'Impresora térmica de alta calidad',
        'Pack total de 10 rollos de contómetros',
        'Instalación incluida',
        'Límite: 1 pack por usuario del sistema'
      ],
      precio: 140.00,
      precioNormal: 193.00,
      imagen: 'assets/impresora.png',
      imagenContometro: 'assets/contometro.png',
      paquetesContometro: 10,
      compatibilidad: ["Android", "iOS", "Windows", "macOS"]
    },

    {
      id: 4,
      nombre: 'Promoción Impresora Térmica 58E + 10 Rollos',
      tipo: 'Promoción',
      descripcion: "Impresora térmica 58E más un paquete de rollos térmicos. Ideal para caja registradora.",
      caracteristicas: [
        "Conexión USB estable y rápida",
        "Incluye cargador original",
        "Compatibilidad: Bluetooth y USB.",
        "Incluye 10 paquete de rollos térmicos",
        "Ideal para negocios con alto volumen de tickets"
      ],
      precio: 180.00,
      precioNormal: 230.00,
      imagen: 'assets/impresora4.png',
      imagenContometro: 'assets/contometro.png',
      paquetesContometro: 10,
      compatibilidad: ["Windows", "Android"]
    },
    {
      id: 3,
      nombre: '10 Rollos de Contómetros',
      tipo: 'Contómetros',
      descripcion: 'Pack de 10 rollos de contómetros de alta calidad',
      caracteristicas: [
        'Pack de 10 rollos',
        'Alta durabilidad',
        'Papel térmico de calidad',
        'Excelente nitidez de impresión',
        'Compatibles con todas las impresoras térmicas'
      ],
      precio: 20.00,
      imagen: 'assets/contometro.png'
    }

  ];

  redirigirWhatsapp(producto: Producto) {
    const numeroTelefono = '51983180125';
    const mensaje = `Hola, estoy interesado en ${producto.nombre} a S/ ${producto.precio}. ¿Me pueden dar más información?`;
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  ngOnInit(): void { }
}
