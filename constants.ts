import { NavItem, Project, Testimonial, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Pedir presupuesto', path: '/contacto' },
];

export const PROJECTS: Project[] = [
  {
    id: 4,
    title: "BAÑO CONTEMPORÁNEO",
    category: "Reforma baño",
    location: "Horta-Guinardó, Barcelona",
    area: "6m²",
    duration: "3 semanas",
    investment: "9.000 €",
    description: "Reforma integral de espacio de baño diseñada con un enfoque minimalista y funcional. Destaca la integración de un sistema avanzado de iluminación LED perimetral en hornacina y techo, revestimientos porcelánicos de gran formato en tonos grises y equipamiento sanitario de diseño.",
    mainImage: "/assets/images/baño_azul1.webp",
    mainImageAlt: "Reforma integral de baño minimalista con iluminación LED técnica",
    gallery: [
      "/assets/images/baño_azul1.webp",
      "/assets/images/baño_azul2.webp",
      "/assets/images/baño_azul3.webp",
      "/assets/images/baño_azul4.webp",
      "/assets/images/baño_azul_antes1.webp",
      "/assets/images/baño_azul_antes2.webp",
      "/assets/images/baño_azul_antes3.webp"
    ],
    galleryAlts: [
      "Reforma integral de baño minimalista con iluminación LED técnica",
      "Detalle de iluminación LED en ducha y hornacina",
      "Vista general del baño con revestimientos porcelánicos",
      "Detalle de acabados y grifería de diseño",
      "Estado original del baño antes de la reforma",
      "Vista del baño antiguo antes de la intervención",
      "Detalle de instalaciones antiguas antes de la renovación"
    ]
  },
  {
    id: 1,
    title: "PISO EN SAGRADA\nFAMILIA",
    category: "Reforma Integral",
    location: "Sagrada Familia, Barcelona",
    area: "74m²",
    duration: "3 meses",
    investment: "60.000 €",
    description: "Reforma integral centrada en la redistribución de espacios para maximizar la luz. Cocina a medida con acabados premium y renovación completa de pavimentos e instalaciones.",
    // Imagen Principal Actualizada
    mainImage: "/assets/images/sagrada-familia-habitacion.webp",
    mainImageAlt: "Reforma integral de salón moderno en Sagrada Familia Barcelona con diseño minimalista",
    gallery: [
      // 1. Principal (Visible)
      "/assets/images/sagrada-familia-habitacion.webp",
      // 2. Miniatura 1: Salón terminado (Visible)
      "/assets/images/sagrada-familia-habitacion-pequena.webp",
      // 3. Miniatura 2: Habitación blanca (Visible)
      "/assets/images/sagrada-familia-salon.webp",
      // 4. Miniatura 3: Cocina antigua/Antes (Visible)
      "/assets/images/sagrada-familia-antes-cocina-1.webp",
      // --- IMÁGENES OCULTAS (Solo Lightbox) ---
      // 5. Detalle cocina/nevera
      "/assets/images/sagrada-familia-antes-cocina-2.webp",
      // 6. Salón vista 2
      // 7. Habitación vista 2
      "/assets/images/sagrada-familia-cocina-detalle.webp",
      // 8. Obra/Antes vista 2
      "/assets/images/sagrada-familia-cocina-panoramica.webp"
    ],
    galleryAlts: [
      "Reforma integral de salón moderno en Sagrada Familia Barcelona con diseño minimalista",
      "Habitación pequeña reformada con acabados premium en piso Sagrada Familia",
      "Dormitorio principal con reforma integral en Barcelona zona Sagrada Familia",
      "Estado inicial cocina antes de reforma integral en Barcelona",
      "Detalle cocina antes de reforma integral con electrodomésticos antiguos",
      "Detalle de cocina moderna reformada con acabados de alta calidad Barcelona",
      "Vista panorámica cocina reformada con diseño contemporáneo Sagrada Familia"
    ]
  },
  {
    id: 5,
    title: "RENOVACIÓN DE COCINA Y BAÑO",
    category: "Reforma Combinada",
    location: "Eixample, Barcelona",
    area: "20m²",
    duration: "1,5 meses",
    investment: "25.000 €",
    description: "Proyecto de reforma doble con un enfoque estético unificado. La cocina presenta un diseño minimalista en blanco con líneas depuradas y maximización del almacenaje. El baño destaca por su revestimiento cerámico de inspiración mármol, mobiliario suspendido en roble y una iluminación técnica que realza la amplitud visual.",
    mainImage: "/assets/images/cocina_d1.webp",
    mainImageAlt: "Reforma integral de cocina minimalista en blanco con diseño contemporáneo Eixample Barcelona",
    gallery: [
      "/assets/images/cocina_d1.webp",
      "/assets/images/cocina_d2.webp",
      "/assets/images/bañob_después.webp",
      "/assets/images/bañob_antes.webp",
      "/assets/images/cocinab_antes.webp"
    ],
    galleryAlts: [
      "Reforma integral de cocina minimalista en blanco con diseño contemporáneo Eixample Barcelona",
      "Detalle de cocina reformada con líneas depuradas y maximización del almacenaje",
      "Baño reformado con revestimiento cerámico inspiración mármol y mobiliario suspendido en roble",
      "Estado inicial del baño antes de la reforma integral en Eixample",
      "Estado inicial de la cocina antes de la reforma integral en Barcelona"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Ha sido un acierto elegir a Renovamarin. Después de pedir varios presupuestos, nos decidimos por ellos por la garantía que nos daban. Reformamos el terrado y el baño, y el resultado ha sido impecable.",
    author: "Sandra P.",
    role: "Piso céntrico"
  },
  {
    id: 2,
    text: "Profesionales con mayúsculas. Tanto en el trabajo como en el trato, Joel y sus chicos son unos cracks! Contacté con ellos para una reforma integral y desde la planificación te das cuenta de la experiencia que tienen.",
    author: "Toni R.",
    role: "Reforma integral"
  },
  {
    id: 3,
    text: "Hemos reformado el baño y estamos muy contentos. Muy buen trato, puntualidad absoluta y cumplimiento de los plazos. Los chicos trabajan muy rápido y son muy limpios. Recomendables 100%.",
    author: "Carmen y Alberto",
    role: "Vivienda familiar"
  },
  {
    id: 4,
    text: "Teníamos un problema serio de filtraciones en el chalet. Nos quedamos con Renovamarin por la seguridad técnica que nos transmitieron. Se nota que llevan toda la vida en esto.",
    author: "Roberto y Lucía",
    role: "Vivienda Unifamiliar"
  },
  {
    id: 5,
    text: "Cambiaron toda la instalación eléctrica y fontanería sin dar un solo problema a los vecinos. Calidad de materiales de primera y muy atentos a nuestras peticiones. Muy profesionales.",
    author: "Ignacio H.",
    role: "Edificio antiguo"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Trabajáis únicamente en Barcelona?",
    answer: "Realizamos proyectos en toda Barcelona y alrededores, desplazando a nuestro equipo para asegurar el mismo nivel de control y acabado en cada obra."
  },
  {
    question: "¿Cuánto nos costará la reforma?",
    answer: "Cada vivienda es única. Preparamos un presupuesto detallado y transparente basándonos en mediciones reales, para que conozcas el coste exacto desde el inicio y sin sorpresas."
  },
  {
    question: "¿Tenéis opciones de financiación?",
    answer: "Sí. Facilitamos el pago a plazos durante el periodo de la obra, adaptando los pagos al avance del proyecto para tu mayor comodidad."
  },
  {
    question: "¿Qué opciones de materiales ofrecéis?",
    answer: "Trabajamos con distintas gamas de materiales (suelos, grifería, sanitarios, etc.) que se adaptan a cada estilo y presupuesto, asegurando calidad y durabilidad."
  },
  {
    question: "¿Cómo gestionáis la limpieza y los escombros?",
    answer: "Gestionamos la retirada diaria de escombros mediante contenedores autorizados y mantenemos el orden durante toda la obra para minimizar las molestias."
  }
];

export const METRICS = [
  { label: "Años de Experiencia", value: "+35" },
  { label: "Proyectos Realizados", value: "+ 314" },
  { label: "Clientes Satisfechos", value: "+ 314" },
];