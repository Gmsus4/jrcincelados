import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react"

export interface Contact {
    icon: Icon;
    title: string;
    value: string; 
    href: string;
}

export interface SocialMedia {
    icon: Icon;
    name: string;
    href: string;
    color: string; 
}

export const imageContact = "/contacto.webp";

export const contact: Contact[] = [
    {
      icon: IconPhone,
      title: "Teléfono",
      value: "+52 386 118 4250",
      href: "tel:+523861184250"
    },
    {
      icon: IconBrandWhatsapp,
      title: "WhatsApp",
      value: "+52 386 118 4250",
      href: "https://wa.me/523861184250"
    },
    {
      icon: IconMail,
      title: "Email",
      value: "contacto@cinceladocuero.com",
      href: "mailto:contacto@cinceladocuero.com"
    },
    {
      icon: IconMapPin,
      title: "Ubicación",
      value: "San Juanito de Escobedo, MX",
      href: "https://maps.app.goo.gl/K317ghUUb6G3hBtb7"
    }
]

export const socialMedia: SocialMedia[] = [
    {
      icon: IconBrandInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/jrcincelados/",
      color: "pink-600"
    },
    {
      icon: IconBrandTiktok,
      name: "Tiktok", 
      href: "https://www.tiktok.com/@jrcincelados",
      color: "blue-600"
    },
    {
      icon: IconBrandWhatsapp,
      name: "WhatsApp", 
      href: "https://wa.me/523861184250",
      color: "green-600"
    }
];