"use client";
import React, { useEffect, useState } from "react";
import { navItems as links } from "@/data/navItems";
import { contact, socialMedia } from "@/data/contact-info";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";

export function SidebarSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen fixed z-50 flex justify-center">
      <Sidebar open={open} setOpen={setOpen} >
        <SidebarBody className="justify-evenly gap-2 aquiiiiiiiii">
            <div className="flex flex-col">
                <SidebarLink link={{ label: "JR Cincelados", href: "/", icon: (<img src="/logo.webp" className="h-7 w-7 shrink-0 rounded-full" width={50} height={50} alt="Avatar"/>),}}/>
                <ContentNavbar items={links}/>
            </div>

          <div className="border-t border-neutral-200 dark:border-neutral-700 my-1" />
          <ContentNavbar items={socialMedia} isTargetBlank={true}/>
          <div className="border-t border-neutral-200 dark:border-neutral-700 my-1" />
          <ContentNavbar items={contact} isTargetBlank={true}/>
          
          {/* <div>
            <SidebarLink className="text-sm italic" link={{ label: "Created by Tagblade", href: "https://www.tagblade.com/", icon: (<img src="/tagblade.jpg" className="h-7 w-7 shrink-0 rounded-full" width={50} height={50} alt="Avatar"/>),}}/>
          </div> */}
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

type NavbarItem = {
    href: string;
    title: string;
    icon: React.ElementType;
};

interface ContentNavbarProps {
    items: NavbarItem[];
    isTargetBlank?: boolean;
}

export const ContentNavbar = ({ items, isTargetBlank = false }: ContentNavbarProps) => {
    const [activeSection, setActiveSection] = useState('');
    // Función para verificar si el enlace está activo
    const isActiveLink = (link: string) => {
        // Remover el # del link para comparar
        const sectionId = link.replace('#', '');
        return activeSection === sectionId;
    };
  
    // Efecto para detectar la sección activa basada en el scroll
    useEffect(() => {
        const handleScroll = () => {
        const sections = links.map(item => item.href.replace('#', ''));
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
    return (
        <div className="mt-8 flex flex-col gap-2">
            {
                items.map((item, idx) => {
                     const isActive = isActiveLink(item.href);
                     return (
                        <SidebarLink key={idx} isTargetBlank={isTargetBlank} aria-current={isActive ? "page" : undefined} className={isActive ? "text-white" : ""}
                            link={{
                                href: item.href,
                                label: item.title,
                                icon: (
                                    <div className={`p-1 ${isActive ? "bg-white" : ""} rounded-full`}>
                                        <item.icon
                                        className={`h-5 w-5 ${isActive ? "text-dark" : "text-white"}`}
                                        />
                                    </div>
                                )
                            }} 
                        />
                     )
                })
            }
        </div>
    )
}