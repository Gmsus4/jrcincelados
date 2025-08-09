import { FooterSection } from "@/components/sections/Footer";
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { FAQs } from '@/components/sections/FAQs';
import { Contact } from '@/components/sections/Contact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Products } from '@/components/sections/Products';
import { SidebarSection } from '@/components/Sidebar';
import { Metadata } from "next";

// ← AQUÍ VA TODO EL SEO (sin archivo separado)
export const metadata: Metadata = {
  title: 'JR Cincelados | Productos de Cuero Artesanales en San Juanito de Escobedo',
  description: 'Especialistas en cincelado y productos de cuero artesanales en San Juanito de Escobedo, México. Carteras, cinturones, bolsos y accesorios únicos hechos a mano.',
  keywords: [
    'cincelado de cuero',
    'productos de cuero artesanales', 
    'San Juanito de Escobedo',
    'carteras de cuero',
    'cinturones artesanales',
    'bolsos de cuero',
    'accesorios de cuero México'
  ],
  authors: [{ name: 'JR Cincelados' }],
  creator: 'JR Cincelados',
  publisher: 'JR Cincelados',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://jrcincelados.com',
    title: 'JR Cincelados | Productos de Cuero Artesanales',
    description: 'Especialistas en cincelado y productos de cuero artesanales en San Juanito de Escobedo, México.',
    siteName: 'JR Cincelados',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JR Cincelados - Productos de Cuero Artesanales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JR Cincelados | Productos de Cuero Artesanales',
    description: 'Especialistas en cincelado y productos de cuero artesanales en San Juanito de Escobedo, México.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://jrcincelados.com',
  },
  verification: {
    google: 'tu-google-verification-code', // Añadir cuando configures Search Console
  },
};

export default function Home() {
  return (
      <div className="font-sans">
        {/* Skip link para accesibilidad */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Saltar al contenido principal
        </a>

        <aside role="navigation" aria-label="Menú principal">
          <SidebarSection />
        </aside>

        <main id="main-content" className="" role="main">
          {/* H1 principal oculto (si no está en Hero) */}
          <h1 className="sr-only">
            JR Cincelados - Productos de Cuero Artesanales en San Juanito de Escobedo
          </h1>
          <section id="inicio">
            <HeroSection />
          </section>
          <section id="productos">
            <Products />
          </section>
          <section id="sobre-nosotros">
            <AboutUs />
          </section>
          <section id="testimoniales">
            <Testimonials />
          </section>
          <section id="faqs">
            <FAQs />
          </section>
          <section id="contacto">
            <Contact />
          </section>
        </main>
        <footer role="contentinfo">
          <FooterSection />
        </footer>
      </div>
  );
}