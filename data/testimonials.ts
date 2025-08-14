import { Icon, IconBrandFacebook, IconBrandTiktok, IconBrandWhatsapp } from "@tabler/icons-react";

export interface Testimonials {
    quote: string;
    name: string;
    location: string;
    stars: number;
    icon?: Icon;
}

export const testimonials: Testimonials[] = [
  {
    quote:
      "La pura cajeta primo, algo bien recomendadisimo gracias 🙏🤠",
    name: "Alexander Torres",
    location: "Tijuana, Baja California",
    stars: 5,
    icon: IconBrandTiktok
  },
  {
    quote:
      "Que bonitos cintos yo ya tengo el mio y están hermosos se los recomiendo a todos el hace muy buen trabajo 👍",
    name: "Tortillero",
    location: "San Juanito de Escobedo, Jalisco",
    stars: 5,
    icon: IconBrandTiktok
  },
  {
    quote:
      "Gracias .. bien chingones.. . Buen trabajo.",
    name: "Meño",
    location: "",
    stars: 5,
    icon: IconBrandWhatsapp
  },
]
