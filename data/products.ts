export interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  available: boolean;
  productionTime: string;
  materials: string[];
  availableColors: string[];
  customization: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cinturón Artesanal Clásico",
    description:
      "Cinturón de cuero genuino curtido al vegetal, hecho a mano con técnicas tradicionales. Disponible en varios colores y con grabado personalizado.",
    fullDescription:
      "Este cinturón artesanal está elaborado con cuero vacuno de primera calidad...",
    price: "$850",
    image: "https://images.pexels.com/photos/5103042/pexels-photo-5103042.jpeg",
    category: "Cinturones",
    rating: 4.9,
    available: true,
    productionTime: "3-5 días laborales",
    materials: ["Cuero vacuno curtido vegetal", "Herrajes de latón", "Hilo encerado"],
    availableColors: ["Negro", "Café", "Miel", "Natural"],
    customization: "Grabado de nombre, iniciales o diseño simple",
  },
  {
    id: 2,
    name: "Bolso de Mano Premium",
    description:
      "Elegante bolso de cuero de primera calidad con compartimentos internos y acabados de lujo.",
    fullDescription:
      "Bolso de mano elaborado con cuero de cabra de primera calidad...",
    price: "$2,450",
    image: "https://images.pexels.com/photos/33223468/pexels-photo-33223468.jpeg",
    category: "Bolsos",
    rating: 5.0,
    available: true,
    productionTime: "1-2 semanas",
    materials: ["Cuero de cabra premium", "Forro de algodón orgánico", "Herrajes de cobre", "Cremalleras YKK"],
    availableColors: ["Negro", "Café chocolate", "Burdeos", "Azul marino"],
    customization: "Grabado interior, elección de forro, cadena personalizada",
  },
  {
    id: 3,
    name: "Cartera Minimalista",
    description:
      "Cartera compacta de cuero búfalo con diseño minimalista. Incluye espacios para tarjetas y billetes.",
    fullDescription:
      "Cartera ultra delgada diseñada para el estilo de vida moderno...",
    price: "$650",
    image: "https://images.pexels.com/photos/4452504/pexels-photo-4452504.jpeg",
    category: "Carteras",
    rating: 4.8,
    available: false,
    productionTime: "5-7 días laborales",
    materials: ["Cuero de búfalo", "Imanes neodimio", "Hilo de poliéster reforzado"],
    availableColors: ["Negro", "Café oscuro", "Gris carbón"],
    customization: "Grabado discreto de iniciales en interior",
  },
  {
    id: 4,
    name: "Funda para Laptop Personalizada",
    description:
      "Protege tu laptop con estilo usando nuestra funda de cuero genuino. Incluye grabado personalizado.",
    fullDescription:
      "Funda protectora diseñada específicamente para laptops, con acolchado interno...",
    price: "$1,200",
    image: "https://images.pexels.com/photos/5951375/pexels-photo-5951375.jpeg",
    category: "Fundas",
    rating: 4.9,
    available: true,
    productionTime: "7-10 días laborales",
    materials: ["Cuero vacuno tratado", "Acolchado de neopreno", "Forro de microfibra", "Cremallera impermeable"],
    availableColors: ["Negro", "Café", "Azul marino"],
    customization: "Grabado de nombre o logo incluido, elección de posición del grabado",
  },
  {
    id: 5,
    name: "Llavero Artesanal",
    description:
      "Pequeño pero significativo, nuestros llaveros de cuero son perfectos como regalo.",
    fullDescription:
      "Llavero artesanal elaborado con retazos de cuero premium de nuestros otros productos...",
    price: "$180",
    image: "https://images.pexels.com/photos/33242820/pexels-photo-33242820.jpeg",
    category: "Accesorios",
    rating: 4.7,
    available: true,
    productionTime: "1-2 días laborales",
    materials: ["Cuero premium reciclado", "Argolla de acero inoxidable", "Aceites naturales"],
    availableColors: ["Variados según disponibilidad"],
    customization: "Grabado láser de texto o diseño simple",
  },
  {
    id: 6,
    name: "Mochila de Cuero Vintage",
    description:
      "Mochila espaciosa de cuero envejecido con compartimentos para laptop. Estilo vintage.",
    fullDescription:
      "Mochila de estilo vintage elaborada con cuero vacuno que ha sido tratado...",
    price: "$3,200",
    image: "https://images.pexels.com/photos/9912145/pexels-photo-9912145.jpeg",
    category: "Mochilas",
    rating: 4.9,
    available: false,
    productionTime: "2-3 semanas",
    materials: ["Cuero vacuno envejecido", "Acolchado ergonómico", "Hebillas de latón", "Forro impermeable"],
    availableColors: ["Café vintage", "Negro desgastado", "Miel envejecido"],
    customization: "Grabado en solapa frontal, elección de hebillas, correas personalizadas",
  }
];
