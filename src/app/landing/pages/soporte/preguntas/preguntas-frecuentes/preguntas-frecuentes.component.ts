import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css',
  animations: [
    trigger('toggleAnim', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        padding: '0 20px'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        padding: '15px 20px'
      })),
      transition('closed <=> open', [
        animate('300ms ease')
      ])
    ])
  ]
})
export class PreguntasFrecuentesComponent {
 preguntas = [
    {
      pregunta: '¿Cuál es la característica de la numeración de los comprobantes de pago electrónicos?',
      respuesta: 'La numeración de los comprobantes de pago y notas de crédito y débito electrónicas, se distinguen de la numeración aquellos emitidos en formato impreso por imprenta autorizada, por la estructura de la numeración. La estructura de la numeración del comprobante está conformada por una serie alfanumérica de 4 posiciones seguido del número correlativo de hasta ocho posiciones, empezando por el correlativo 1.',
      abierto: false
    },
    {
      pregunta: '¿Una nota de crédito electrónica puede modificar una factura física (no electrónica, impresa por imprenta autorizada)?',
      respuesta: 'Sí es posible hacer una nota de crédito a facturas no electrónicas. También se puede aplicar para modificar boletas y tickets impresos por máquinas registradoras.',
      abierto: false
    },
    {
      pregunta: '¿Debo anular las facturas y notas de crédito/débito electrónicas rechazadas por SUNAT?',
      respuesta: 'No. Solo se utiliza la “Comunicación de Baja” para comprobantes electrónicos que fueron aceptados por la SUNAT y que, por alguna razón necesites dar de baja.',
      abierto: false
    },

    {
      pregunta: '¿Cómo se entregan las facturas electrónicas, notas de crédito y débito electrónicas asociadas?',
      respuesta: 'Los comprobantes electrónicos, los puedes entregar por medios electrónicos (email, web, etc) o de manera impresa. Tu defines el medio de entrega. En Mifact puedes enviar tus facturas, boletas y notas de crédito/débito por Correo, WhatsApp y Telegram rápidamente.',
      abierto: false
    },
    {
      pregunta: '¿Cuándo una factura electrónica es rechazada por SUNAT, puedo volver a usar la misma numeración (correlativo)?',
      respuesta: 'No, si SUNAT rechazó la factura, el número correspondiente queda inutilizado y es necesario usar otra numeración. Si ya entregaste la factura a tu cliente, debes emitir una nueva factura. Es importante tener en cuenta que una factura rechazada carece de valor tributario.',
      abierto: false
    },
    {
      pregunta: '¿Cuál fue el último plazo para emitir facturas electrónicas de manera obligatoria?',
      respuesta: '* Si tus ingresos anuales son mayores o iguales a 75 UIT o S/ 386,250.00, debes emitir tus facturas, boletas de venta electrónica, ticket POS y notas desde el 1 de enero de 2021. * Si tus ingresos anuales son mayores o iguales a 23 UIT o S/ 118,450.00 y menores a 75 UIT o S/ 386,250.00, debes emitir tus facturas electrónicas y notas desde el 1 de enero de 2022, así como tus boletas de venta electrónica, ticket POS y notas a partir del 1 de abril de 2022. * Si tus ingresos anuales son menores a 23 UIT o S/ 118,450.00, debes emitir tus facturas electrónicas y notas desde el 1 de abril de 2022, así como tus boletas de venta electrónica, ticket POS y notas a partir del 1 de junio de 2022.',
      abierto: false
    },
        {
      pregunta: '¿Puedo confiar mis facturas y boletas electrónicas a un Proveedor de Servicios Electrónicos (PSE)?',
      respuesta: 'Si, pero comprueba que la empresa que contrates se encuentre acreditada y homologada por SUNAT. Mifact bajo su razón social OSYS COMPANY SAC es un PSE autorizado por SUNAT y certificada por la ISO 27001 de la seguridad de la información, que cuenta con la infraestructura para poder atender tus necesidades y cuidar tu información.',
      abierto: false
    },
        {
      pregunta: '¿Es necesario solicitar autorización para los rangos de numeración de factura electrónica?',
      respuesta: 'No, en el caso de los documentos electrónicos, ya no es necesario solicitar autorización de rangos de numeración. El emisor electrónico, gestiona su propia numeración. Tampoco tiene que comunicar altas y bajas de series.',
      abierto: false
    },
    {
      pregunta: '¿Cómo es la numeración de la serie y correlativos en la facturación electrónica?',
      respuesta: 'La serie debe ser alfanumérica de cuatro caracteres empezando con F para Facturas y B para Boletas electrónicas. Ejemplo: Factura F001, Boleta B001, Guía Remitente T001 y Guía Transportista V001. El número o correlativo debe ser de 8 dígitos como máximo, no es obligatorio colocar números a la izquierda, se empieza por el número 1.',
      abierto: false
    },
        {
      pregunta: '¿Sólo puedo utilizar una única serie por cada factura, boleta, guías electrónicas, notas de crédito y débito?',
      respuesta: 'No, puedes utilizar las series que gustes para cada tipo de comprobante electrónico (boletas, facturas y guías electrónicas). Pero recuerda que debes respetar la estructura de serie de cada comprobante. * La serie debe ser alfanumérica de cuatro caracteres. Ejemplo: Factura F001, Boleta B001, Guía Remitente T001 y Guía Transportista V001. * Con la facturación electrónica ya no es necesario pedir permiso a la SUNAT por cada serie que uses.',
      abierto: false
    },
  ];

  togglePregunta(index: number): void {
    this.preguntas[index].abierto = !this.preguntas[index].abierto;
  }


}
