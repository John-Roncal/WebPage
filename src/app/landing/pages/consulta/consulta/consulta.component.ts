import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ComprobanteComponent } from '../comprobante/comprobante.component';
import { GuiaRemisionComponent } from '../guia-remision/guia-remision.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [DropdownModule,FormsModule,ComprobanteComponent,GuiaRemisionComponent,CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  isSubmiting:boolean = false;
  selectedOption: any ='CE';
  consultas = [
    {
      label: 'Comprobantes Electrónicos',
      value: 'CE'
    },
    {
      label: 'Guia de Remisión Electrónica',
      value: 'GRE'
    }
  ]



  setLoading(status: any) {
    this.isSubmiting = status
  }


}
