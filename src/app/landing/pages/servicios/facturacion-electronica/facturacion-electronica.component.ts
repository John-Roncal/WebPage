import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facturacion-electronica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facturacion-electronica.component.html',
})
export class FacturacionElectronicaComponent {

  // ===================== FUNCIONALIDADES (15) =====================
  features = [
    {
      title: 'Emite tus boletas y facturas fácil y rápido',
      description:
        'Podrás emitir tus comprobantes en menos de 30 segundos, cumpliendo toda la normativa de SUNAT.',
    },
    {
      title: 'Emite notas de crédito y débito con un clic',
      description:
        'Genera en segundos tus notas de crédito o débito, por el total o de forma parcial. El sistema jala automáticamente la información del comprobante comprometido.',
    },
    {
      title: 'Emite guías de remisión',
      description:
        'Emite tus guías de remisión con un par de clics. El sistema jala los productos de tus facturas o boletas para que no vuelvas a digitar nada.',
    },
    {
      title: 'Genera cotizaciones para tus clientes',
      description:
        'Crea todas las cotizaciones que tus clientes necesiten y, cuando la acepten, conviértelas en factura o boleta con un clic.',
    },
    {
      title: 'Genera documentos de venta interna',
      description:
        'Registra tickets o notas de venta para operaciones internas sin necesidad de emitir comprobantes electrónicos.',
    },
    {
      title: 'Anula tus comprobantes con un clic',
      description:
        'Anula comprobantes electrónicos mediante comunicaciones de baja. También puedes anular usando notas de crédito.',
    },
    {
      title: 'Crea tus productos y servicios de forma rápida',
      description:
        'Registra productos o servicios colocando precio, unidades y configuración. El sistema los jala automáticamente al emitir comprobantes.',
    },
    {
      title: 'Conectado con RENIEC y SUNAT',
      description:
        'Evita digitar datos de clientes. Solo ingresa el número de documento y el sistema completa la información automáticamente.',
    },
    {
      title: 'Encuentra fácil y rápido tus comprobantes ya emitidos',
      description:
        'Búsqueda avanzada por fecha, tipo, serie, correlativo o cliente. Encuentra cualquier comprobante en segundos.',
    },
    {
      title: 'Sube tus comprobantes de contingencia',
      description:
        'Registra comprobantes físicos o de contingencia y sincronízalos con tu sistema para llevar el orden de toda tu facturación.',
    },
    {
      title: 'Link de consulta de comprobantes',
      description:
        'Tus clientes podrán consultar y descargar PDF, XML y CDR directamente desde tu web sin pedírtelos.',
    },
    {
      title: 'Imprime tus documentos en ticketera o impresora normal',
      description:
        'Imprime en el formato que prefieras: ticket de 80mm, 58mm o formato A4. Compatibilidad con todo tipo de impresoras.',
    },
    {
      title: 'Envía por correo el comprobante a tu cliente',
      description:
        'Envía automáticamente los comprobantes al correo de tu cliente. Ideal para mejorar la atención y soporte.',
    },
    {
      title: 'Genera tu reporte contable con un clic',
      description:
        'Genera reportes para tu contador en segundos y descárgalos en Excel con toda la información de tus ventas.',
    },
    {
      title: 'Controla tus ventas a través de nuestros reportes',
      description:
        'Analiza cuánto vendes por mes, tus productos más vendidos y métricas clave. Todos los reportes son exportables a Excel.',
    }
  ];



  // ===================== BENEFICIOS (5) =====================
  benefits = [
    {
      title: 'Reporte de seguimiento de estado SUNAT',
      description:
        'Visualiza de forma gráfica cuántos comprobantes has emitido y en qué estado se encuentran ante SUNAT. Ideal para tu contador.',
    },
    {
      title: 'Seguimiento diario a documentos ignorados y rechazados por SUNAT',
      description:
        'Monitoreamos diariamente si SUNAT rechazó tus comprobantes por RUC inexistente, errores de servidores o falta de CDR. También te ayudamos con la solución.',
    },
    {
      title: 'Compromiso de CERO multas o sanciones de SUNAT',
      description:
        'Te acompañamos en todo el proceso para evitar multas por errores de facturación electrónica. Supervisamos que tus comprobantes cumplan normativa.',
    },
    {
      title: 'Soporte y asesoría a tu contador',
      description:
        'Tu contador puede comunicarse con nosotros para resolver dudas del sistema, normas SUNAT o reportes contables.',
    },
    {
      title: 'Certificados por SUNAT y en seguridad y confidencialidad de la información',
      description:
        'Cumplimos estándares internacionales como ISO27001 y contamos con certificación SUNAT para garantizar privacidad y seguridad.',
    }
  ];

}
