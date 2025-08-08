import { NavbarResizable } from '../components/navbarResizable';
import { FooterSection } from "@/components/sections/Footer";
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { FAQs } from '@/components/sections/FAQs';
import { Contact } from '@/components/sections/Contact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Products } from '@/components/sections/Products';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';


/* Proceso de elaboracion */

export default function Home() {
  return (
    <div className="font-sans">
      {/* <header className="w-full">
        <NavbarResizable />
        <Navbar />
      </header>
      <main className="w-full h-full">
        <HeroSection />
        <Products />
        <AboutUs />
        <Testimonials />
        <FAQs />
        <Contact/>
      </main> */}

      <Navbar />
      <HeroSection />
      <Products />
      <AboutUs />
      <Testimonials />
      <FAQs />
      <Contact />
      <FooterSection />
    </div>
  );
}
