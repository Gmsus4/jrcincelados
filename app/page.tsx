import { CardsCarousel } from '@/components/CardsCarrousel';
import { NavbarResizable } from '../components/navbarResizable';
import { ContactSection } from "@/components/sections/Contact";
import { FAQSection } from "@/components/sections/FAQ";
import { FooterSection } from "@/components/sections/Footer";
import { HeroSection } from '@/components/sections/HeroSection';


/* Testimoniales
Proceso de elaboracion
Sobre nosotros / Sobre mi */

export default function Home() {
  return (
    <div className="font-sans">
      <header className="w-full fixed z-50">
        <NavbarResizable />
      </header>
      <main className="w-full h-full">
        <HeroSection />
        <CardsCarousel />
        <ContactSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}
