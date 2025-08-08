"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ButtonSimple } from './ui/btn';
import { navItems } from '@/data/navItems';
import { NavbarButton } from './ui/resizable-navbar';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para verificar si el enlace está activo
  const isActiveLink = (link: string) => {
    // Remover el # del link para comparar
    const sectionId = link.replace('#', '');
    return activeSection === sectionId;
  };

  // Efecto para detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.link.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset para activación temprana

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Detectar sección activa basada en el hash inicial
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '');
      setActiveSection(newHash);
    });

    // Ejecutar una vez al cargar
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => {});
    };
  }, []);

  // Efecto para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Función para manejar el clic en los enlaces y cerrar el menú móvil
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="bg-darkB fixed top-0 z-50 w-full border-gray-200">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between lg:justify-evenly mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={40} height={40} src="/logo.webp" className="h-8 rounded-full w-auto" alt="JR Cincelados Logo" />
          <span className="self-center mt-[1px] text-2xl font-semibold whitespace-nowrap dark:text-white hidden xl:flex">JR Cincelados</span>
        </Link>
    
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse items-center">
        {/* <ButtonSimple title='Contáctanos' href=''/> */}
          <NavbarButton href="" variant="primary" className="flex gap-2 items-center group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-white/30 bg-white/10 backdrop-blur-sm font-semibold text-white transition-all duration-300 hover:border-white/50">
            <IconBrandWhatsapp/>
          </NavbarButton>
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-cta" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div 
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} 
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            {navItems.map((item, idx) => {
              const isActive = isActiveLink(item.link);
              return (
                <li key={idx}>
                  <Link 
                    href={item.link} 
                    className={`block py-2 px-3 2xl:px-6 xl:px-4 md:py-1 rounded-sm text-sm font-medium ${
                      isActive
                        ? 'text-white bg-dark md:bg-dark'
                        : 'md:hover:bg-transparent md:hover:text-white/70 text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent'
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};