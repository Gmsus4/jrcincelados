"use client";
import { motion } from "motion/react";
import { 
  IconBrandInstagram, 
  IconBrandTiktok, 
  IconBrandWhatsapp, 
  IconHeart, 
  IconMail, 
  IconMapPin, 
  IconPhone 
} from "@tabler/icons-react";

import { navItems } from "@/data/navItems";
import { socialMedia, contact } from "@/data/contact-info";
import Link from "next/link";

export function FooterSection() {
  const products = [
    { name: "Carteras", href: "#products" },
    { name: "Cinturones", href: "#products" },
    { name: "Bolsos", href: "#products" },
    { name: "Accesorios", href: "#products" }
  ];

  return (
    <footer className="md:bg-white bg-darkB p-4 pt-2">
       <div className="bg-darkB rounded-lg">
          <div className="max-w-7xl mx-auto md:p-20 sm:p-10 sm:pt-36 p-4">
            
            {/* Contenido principal */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              
              {/* Info de marca */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  JR Cincelados
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
                  Transformamos el cuero en arte funcional. Cada pieza es única, hecha con tradición y materiales de calidad que perduran en el tiempo.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {contact.map((info, index) => (
                    <Link href={info.href} className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white" target="_blank" key={index}>
                      <info.icon size={16} /> {info.value}
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Enlaces rápidos */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                  Enlaces
                </h4>
                <ul className="space-y-2 text-sm">
                  {navItems.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.link} 
                        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Productos */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                  Productos
                </h4>
                <ul className="space-y-2 text-sm">
                  {products.map((product, index) => (
                    <li key={index}>
                      <a 
                        href={product.href} 
                        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6 flex-col sm:flex-row gap-4">
              
              {/* Derechos */}
              <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
                © 2025 Cincelado de Cuero. Todos los derechos reservados.
              </div>

              {/* Redes */}
              <div className="flex gap-4">
                {socialMedia.map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-full border border-neutral-700 transition duration-700 hover:bg-${social.color}`}
                  >
                    <social.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Credito */}
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-4 text-center sm:text-right">
              Hecho con{" "}
              <IconHeart size={12} className="inline text-red-500" /> por{" "}
              <a href="https://www.tagblade.com" target="_blank" className="underline hover:text-neutral-700 dark:hover:text-white">
                Tagblade
              </a>
            </div>
          </div>
       </div>
    </footer>
  );
}
