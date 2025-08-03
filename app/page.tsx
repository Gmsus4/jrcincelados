import { NavbarResizable } from '../components/navbarResizable';
import { FooterSection } from "@/components/sections/Footer";
import { HeroSectionCopy } from '@/components/sections/HeroSection copy';
import { AboutUs } from '@/components/sections/AboutUs';
import { FAQs } from '@/components/sections/FAQs';
import { Contact } from '@/components/sections/Contact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Productos } from '@/components/sections/Products';


/*
Proceso de elaboracion
Productos
*/

export default function Home() {
  return (
    <div className="font-sans">
      <header className="w-full fixed z-50">
        <NavbarResizable />
      </header>
      <main className="w-full h-full">
        {/* <HeroSection /> */}
        <HeroSectionCopy />
        <AboutUs />
        <Productos />
        <Testimonials />
        <FAQs />
        <Contact/>
      </main>
      <FooterSection />
    </div>
  );
}
