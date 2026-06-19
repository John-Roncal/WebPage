import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

interface Herramienta {
  id: number;
  nombre: string;
  descripcion: string;
  url: string;
  categoria: string;
  iconColor: string;
  iconBg: string;
  icon: 'check' | 'search' | 'document' | 'link';
  imagen?: string;
}

@Component({
  selector: 'app-herramientas-apoyo',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './herramientas-apoyo.component.html',
  styleUrl: './herramientas-apoyo.component.css'
})
export class HerramientasApoyoComponent {

  herramientas: Herramienta[] = [
    {
      id: 1,
      nombre: 'Validar comprobantes',
      descripcion: 'Verifica la validez de facturas, boletas y otros comprobantes electrónicos.',
      url: 'https://e-consulta.sunat.gob.pe/ol-ti-itconsvalicpe/ConsValiCpe.htm',
      categoria: 'SUNAT',
      iconColor: '#3B6D11',
      iconBg: '#EAF3DE',
      icon: 'check',
      imagen: 'assets/sunat.png'
    },
    {
      id: 2,
      nombre: 'Consulta RUC',
      descripcion: 'Busca información de contribuyentes por número de RUC, nombre o razón social.',
      url: 'https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/FrameCriterioBusquedaWeb.jsp',
      categoria: 'SUNAT',
      iconColor: '#854F0B',
      iconBg: '#FAEEDA',
      icon: 'search',
      imagen: 'assets/sunat.png'
    }
  ];

  abrirEnlace(url: string): void {
    window.open(url, '_blank');
  }
}