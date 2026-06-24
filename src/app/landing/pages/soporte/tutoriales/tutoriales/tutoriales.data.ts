export type DeviceType = 'pc' | 'mobile';
export type MobileCategory = 'restaurant' | 'clothing' | 'other';

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  duration?: string;
  videoUrl?: string; // undefined = próximamente
  thumbnail?: string;
}

export interface TutorialFlow {
  device: DeviceType;
  category?: MobileCategory;
  label: string;
  tutorials: Tutorial[];
}

export const TUTORIAL_FLOWS: TutorialFlow[] = [
  // ─── PC / LAPTOP ──────────────────────────────────────────────
  {
    device: 'pc',
    label: 'Computadora / Laptop',
    tutorials: [
      {
        id: 1,
        title: 'Introducción a Kallpa Facturación',
        description: 'Conoce la interfaz principal, el panel de control y cómo navegar por el sistema en la versión web.',
        duration: '1 min',
        videoUrl: 'https://youtu.be/yHa_GHueWnM',
      },
      {
        id: 2,
        title: 'Inventario e ingreso de productos',
        description: 'Aprende a registrar tus productos, categorías, precios y unidades de medida.',
        duration: '8 min',
        videoUrl: undefined,
      },
      {
        id: 3,
        title: 'Ventas y facturación',
        description: 'Emite boletas y facturas electrónicas paso a paso, con búsqueda de clientes y RUC automático.',
        duration: '10 min',
        videoUrl: undefined,
      },
      {
        id: 4,
        title: 'Reportes de ventas',
        description: 'Accede a tus reportes diarios, semanales y mensuales, y exporta la información a Excel.',
        duration: '6 min',
        videoUrl: undefined,
      },
      {
        id: 5,
        title: 'Caja registradora',
        description: 'Gestiona la apertura y cierre de caja, registra ingresos y egresos de efectivo.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 6,
        title: 'Balance',
        description: 'Visualiza el balance general de tu negocio y analiza tus ganancias del período.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 7,
        title: 'Catálogo virtual',
        description: 'Configura tu catálogo para que tus clientes puedan ver tus productos y realizar pedidos.',
        duration: '8 min',
        videoUrl: undefined,
      },
      {
        id: 8,
        title: 'Gestión de usuarios',
        description: 'Crea y administra usuarios con diferentes roles y permisos dentro del sistema.',
        duration: '6 min',
        videoUrl: undefined,
      },
      {
        id: 9,
        title: 'Configuración con ticketera',
        description: 'Conecta y configura tu impresora ticketera para imprimir comprobantes directamente.',
        duration: '9 min',
        videoUrl: undefined,
      },
    ],
  },

  // ─── MÓVIL / RESTAURANTE ──────────────────────────────────────
  {
    device: 'mobile',
    category: 'restaurant',
    label: 'Restaurante / Cafetería',
    tutorials: [
      {
        id: 1,
        title: 'Introducción a la app móvil',
        description: 'Recorre la app móvil de Kallpa: menú principal, modo restaurante y configuración inicial.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 2,
        title: 'Registro de platos',
        description: 'Agrega tus platos, bebidas y combos con fotos, precios y categorías del menú.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 3,
        title: 'Módulo de pedidos',
        description: 'Toma pedidos por mesa, gestiona el estado de cada orden y envíalos a cocina.',
        duration: '9 min',
        videoUrl: undefined,
      },
      {
        id: 4,
        title: 'Crear comanda y facturación',
        description: 'Genera la comanda de una mesa y emite la boleta o factura electrónica al cierre.',
        duration: '8 min',
        videoUrl: undefined,
      },
      {
        id: 5,
        title: 'Caja registradora',
        description: 'Abre y cierra caja, controla ingresos y egresos de efectivo desde la app.',
        duration: '6 min',
        videoUrl: undefined,
      },
      {
        id: 6,
        title: 'Balance',
        description: 'Consulta el balance de ventas del día y períodos anteriores desde tu celular.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 7,
        title: 'Catálogo virtual',
        description: 'Activa el catálogo para que tus clientes escaneen un QR y vean tu carta digital.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 8,
        title: 'Configuración con ticketera',
        description: 'Vincula tu impresora ticketera vía Bluetooth para imprimir comandas y comprobantes.',
        duration: '8 min',
        videoUrl: undefined,
      },
    ],
  },

  // ─── MÓVIL / ROPA Y CALZADO ──────────────────────────────────
  {
    device: 'mobile',
    category: 'clothing',
    label: 'Ropa / Calzado',
    tutorials: [
      {
        id: 1,
        title: 'Introducción a la app móvil',
        description: 'Conoce la app móvil de Kallpa en el modo ropa y calzado, con gestión de variantes.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 2,
        title: 'Registro de productos y sus variantes',
        description: 'Ingresa productos con tallas, colores y modelos. Controla el stock por variante.',
        duration: '10 min',
        videoUrl: undefined,
      },
      {
        id: 3,
        title: 'Ventas y facturación',
        description: 'Realiza ventas seleccionando talla y color, y emite el comprobante electrónico.',
        duration: '8 min',
        videoUrl: undefined,
      },
      {
        id: 4,
        title: 'Caja registradora',
        description: 'Gestiona la caja del día, registra pagos en efectivo, tarjeta o Yape/Plin.',
        duration: '6 min',
        videoUrl: undefined,
      },
      {
        id: 5,
        title: 'Balance',
        description: 'Analiza tus ventas por período y lleva el control de ganancias desde la app.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 6,
        title: 'Catálogo virtual',
        description: 'Publica tu catálogo online con fotos de prendas para que tus clientes compren fácil.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 7,
        title: 'Configuración con ticketera',
        description: 'Conecta tu ticketera por Bluetooth e imprime boletas directamente desde la app.',
        duration: '8 min',
        videoUrl: undefined,
      },
    ],
  },

  // ─── MÓVIL / OTROS RUBROS ─────────────────────────────────────
  {
    device: 'mobile',
    category: 'other',
    label: 'Otros rubros',
    tutorials: [
      {
        id: 1,
        title: 'Introducción a la app móvil',
        description: 'Explora la app móvil de Kallpa para cualquier tipo de negocio. Panel y configuración inicial.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 2,
        title: 'Registro de productos',
        description: 'Crea tu catálogo de productos o servicios con precios, categorías e imágenes.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 3,
        title: 'Ventas y facturación',
        description: 'Realiza ventas rápidas y emite boletas o facturas electrónicas a tus clientes.',
        duration: '8 min',
        videoUrl: undefined,
      },
      {
        id: 4,
        title: 'Caja registradora',
        description: 'Abre tu caja, registra movimientos y cierra el turno con resumen de ventas.',
        duration: '6 min',
        videoUrl: undefined,
      },
      {
        id: 5,
        title: 'Balance',
        description: 'Consulta el balance de tu negocio y tus indicadores clave desde el celular.',
        duration: '5 min',
        videoUrl: undefined,
      },
      {
        id: 6,
        title: 'Catálogo virtual',
        description: 'Activa el catálogo digital para compartir tus productos con tus clientes por WhatsApp.',
        duration: '7 min',
        videoUrl: undefined,
      },
      {
        id: 7,
        title: 'Configuración con ticketera',
        description: 'Configura la impresora Bluetooth para imprimir tickets y comprobantes al instante.',
        duration: '8 min',
        videoUrl: undefined,
      },
    ],
  },
];