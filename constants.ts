import { Product, ProductCategory, ServiceLine } from './types';

export const COMPANY_INFO = {
  name: "Comercializadora Palmera Real",
  address: "Calle 9 # 359 X 2 Y 2-A Col. Diaz Ordaz",
  rfc: "CPR100120SV8",
  coords: {
    lat: 21.003011684792046,
    lng: -89.59001591021426
  }
};

export const PRODUCTS: Product[] = [
  // Institucional
  {
    id: 1,
    name: "Camisa Ejecutiva Oxford",
    category: ProductCategory.INSTITUTIONAL,
    price: 350,
    description: "Camisa de alta calidad para oficina, tela transpirable.",
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    id: 2,
    name: "Pantalón de Vestir Formal",
    category: ProductCategory.INSTITUTIONAL,
    price: 450,
    description: "Corte moderno, durabilidad garantizada para uso diario.",
    image: "https://picsum.photos/400/400?random=2"
  },
  {
    id: 3,
    name: "Uniforme Escolar Completo",
    category: ProductCategory.INSTITUTIONAL,
    price: 600,
    description: "Set de falda/pantalón y polo bordada.",
    image: "https://picsum.photos/400/400?random=3"
  },
  // Deportiva
  {
    id: 4,
    name: "Jersey Fútbol Personalizado",
    category: ProductCategory.SPORTS,
    price: 280,
    description: "Tecnología Dry-Fit, sublimado completo.",
    image: "https://picsum.photos/400/400?random=4"
  },
  {
    id: 5,
    name: "Traje de Triatlón",
    category: ProductCategory.SPORTS,
    price: 1200,
    description: "Diseño aerodinámico para alto rendimiento.",
    image: "https://picsum.photos/400/400?random=5"
  },
  {
    id: 6,
    name: "Conjunto Ciclismo",
    category: ProductCategory.SPORTS,
    price: 950,
    description: "Jersey y Bib short con pad de gel.",
    image: "https://picsum.photos/400/400?random=6"
  },
  // Recreativa
  {
    id: 7,
    name: "Chamarra Impermeable",
    category: ProductCategory.RECREATIONAL,
    price: 890,
    description: "Ideal para senderismo y pesca bajo lluvia ligera.",
    image: "https://picsum.photos/400/400?random=7"
  },
  {
    id: 8,
    name: "Chaleco de Pesca",
    category: ProductCategory.RECREATIONAL,
    price: 550,
    description: "Múltiples bolsillos y malla ventilada.",
    image: "https://picsum.photos/400/400?random=8"
  },
  // Hoteleria
  {
    id: 9,
    name: "Filipina de Chef Ejecutiva",
    category: ProductCategory.HOSPITALITY,
    price: 700,
    description: "Doble botonadura, tela repelente.",
    image: "https://picsum.photos/400/400?random=9"
  },
  {
    id: 10,
    name: "Mantel Redondo Damasco",
    category: ProductCategory.HOSPITALITY,
    price: 320,
    description: "Elegancia para eventos y restaurantes.",
    image: "https://picsum.photos/400/400?random=10"
  },
  {
    id: 11,
    name: "Set de Servilletas (12 pzas)",
    category: ProductCategory.HOSPITALITY,
    price: 250,
    description: "Algodón 100%, gran absorción.",
    image: "https://picsum.photos/400/400?random=11"
  }
];

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: 'inst',
    title: 'Institucional',
    description: 'Imagen profesional para empresas y colegios. Uniformes duraderos y elegantes.',
    iconName: 'Building',
    image: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: 'sport',
    title: 'Deportiva',
    description: 'Alto rendimiento para Fútbol, Baseball, Triatlón, Natación y más.',
    iconName: 'Trophy',
    image: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: 'rec',
    title: 'Recreativa / Outdoor',
    description: 'Equipamiento para la aventura: Camping, Pesca, Senderismo.',
    iconName: 'Tent',
    image: 'https://picsum.photos/800/600?random=22'
  },
  {
    id: 'hosp',
    title: 'Hotelería y Restaurantes',
    description: 'Textiles de calidad: Mantelería, ropa de chef, mandiles y servicio.',
    iconName: 'Utensils',
    image: 'https://picsum.photos/800/600?random=23'
  }
];