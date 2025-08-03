"use client";

import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import TikTokVideo from "../TikTokEmbed";

export function ContactSection() {
  const contactInfo = [
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
      href: "#"
    }
  ];

  const socialMedia = [
    {
      icon: IconBrandInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/jrcincelados/",
      color: "hover:text-pink-600"
    },
    {
      icon: IconBrandTiktok,
      name: "Tiktok", 
      href: "https://www.tiktok.com/@jrcincelados",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <Image
        src="/floreado.jpg"
        alt="Fondo de cuero"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 -z-10 bg-black/30 dark:bg-black/90" />
      <div className="px-4 py-10 md:py-20 relative">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4"
            >
              Estamos listos para ayudarte
            </motion.p>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-500 mb-6 leading-tight"
            >
              Contáctanos
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            >
              Escríbenos y descubre cómo podemos crear algo hecho a mano especialmente para ti,
              <span className="font-medium text-amber-700 dark:text-amber-300">
                {" "}cuidando cada detalle del proceso.
              </span>
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <item.icon className="h-8 w-8 text-neutral-800 dark:text-neutral-200 mb-3 group-hover:text-neutral-600 transition-colors" />
            <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              {item.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 break-all">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Redes sociales */}
      <div className="text-center mb-14">
        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-6">
          Síguenos
        </h3>
        <div className="flex justify-center gap-6">
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              <social.icon className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Botones */}
      <div className="text-center">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="w-56 border border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 py-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            Solicitar cotización
          </button>
          <button className="w-56 bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-700 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300 transition">
            Ver nuestro trabajo
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}