"use client"

export default function TikTokVideo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <iframe
        src="https://www.tiktok.com/embed/v2/7531174155933306120"
        width="325"
        height="575"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}



// La original

"use client";

import { motion } from "motion/react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import Image from "next/image";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/floreado.jpg"
          alt="Fondo de cuero artesanal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/60 dark:from-black/60 dark:via-black/90 dark:to-black/90" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 px-6 py-12 md:py-20 max-w-6xl mx-auto text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Main Title */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl px-6 text-center sm:text-6xl font-bold text-white leading-tight mb-6"
          variants={fadeInUp}
        >
          {"Cincelado de cuero con calidad"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "backOut",
            }}
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold"
          >
            artesanal
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mx-auto mb-8"
        >
          Cada pieza es única, hecha con tradición y materiales de calidad. 
          <span className="block mt-2 text-amber-200 font-medium">
            Transformamos el cuero en arte funcional.
          </span>
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-10 rounded-full"
        />

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-amber-500/25 min-w-[200px]"
          >
            <span className="relative z-10">Ver productos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-white/50 min-w-[200px]"
          >
            <span className="relative z-10">Contáctanos</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}






// La parte de imagen a la derecha
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen bg-stone-50 dark:bg-neutral-950 overflow-hidden h-screen grid grid-cols-12 gap-0 items-center justify-center">
      <div className="col-span-7 overflow-hidden h-full p-5 pt-22 w-full flex items-end flex-col">
        <div className="rounded-2xl h-full flex flex-col items-start justify-center gap-6 w-3xl pr-10 pl-0">
          <span>Available for work</span>
          <h1 className="text-6xl">Your trusted partner for quality home improvement</h1>
          <span className="text-2xl">Refit delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.</span>
          <Link href={""} className="px-8 py-4 bg-white/20 text-white rounded-full inline-block">
            Work with us
          </Link>
        </div>
      </div>
      <div className="p-5 pt-22 col-span-5 rounded-4xl overflow-hidden h-screen">
        <Image
          alt=""
          src="https://images.pexels.com/photos/33189512/pexels-photo-33189512.jpeg"
          width={500}
          height={300}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}




          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>