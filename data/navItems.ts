import { createElement, ReactNode } from "react";
import { 
  Icon,
  IconAirBalloonFilled,
  IconContract,
  IconFlagQuestion,
  IconHelpCircle,
  IconInfoCircle,
  IconMail,
  IconMessage,
  IconPackage,
  IconUser,
  IconUserBolt,
  IconUserQuestion,
} from "@tabler/icons-react";


export interface NavItem {
  title: string;
  href: string;
  icon: Icon;
}

export const navItems: NavItem[] = [
{
    title: "Productos",
    href: "#products",
    icon: IconPackage,
  },
  {
    title: "Sobre Nosotros",
    href: "#about",
    icon: IconInfoCircle,
  },
  {
    title: "Testimoniales",
    href: "#testimonials",
    icon: IconMessage,
  },
  {
    title: "FAQs",
    href: "#faqs",
    icon: IconHelpCircle,
  },
  {
    title: "Contacto",
    href: "#contact",
    icon: IconMail,
  },
];
