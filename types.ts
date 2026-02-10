export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  area: string;
  duration: string;
  mainImage: string;
  mainImageAlt: string; // Alt text para la imagen principal
  gallery: string[]; // Array de URLs para la galería (incluyendo detalles)
  galleryAlts: string[]; // Array de alt texts para cada imagen de la galería
  investment: string; // Nuevo campo para la inversión
}



export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}