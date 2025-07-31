"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-stone-50 dark:bg-neutral-950 overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle diagonal lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 50%, transparent 60%)`,
            backgroundSize: '120px 120px'
          }} />
        </div>
        
        {/* Floating geometric accent */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/6 w-1 h-32 bg-gradient-to-b from-amber-600 to-transparent opacity-20"
          style={{ transformOrigin: 'bottom center' }}
        />
      </div>

      {/* Main Content Grid Layout */}
      <div className="relative z-10 min-h-screen grid grid-cols-12 gap-8 px-8 py-16">
        
        {/* Left Column - Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          
          {/* Minimal Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-0.5 bg-amber-600" />
            <span className="text-sm font-medium text-stone-600 dark:text-neutral-400 uppercase tracking-wider">
              Artesanía Premium
            </span>
          </motion.div>

          {/* Typography Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-stone-900 dark:text-white leading-none mb-4">
              Cuero
            </h1>
            <div className="flex items-baseline gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-amber-600 tracking-wide">
                Artesanal
              </h2>
              <div className="flex-1 h-px bg-stone-300 dark:bg-neutral-700 mt-4" />
            </div>
          </motion.div>

          {/* Refined Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-stone-600 dark:text-neutral-400 max-w-lg leading-relaxed mb-12 font-light"
          >
            Donde cada pieza narra una historia de tradición, 
            precisión y elegancia atemporal.
          </motion.p>

          {/* Sophisticated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 text-stone-900 dark:text-white font-medium text-lg"
            >
              <span>Explorar colección</span>
              <motion.div
                className="w-12 h-px bg-amber-600"
                whileHover={{ width: 20 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-amber-600"
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-stone-500 dark:text-neutral-500 font-medium underline underline-offset-4 decoration-1 hover:text-amber-600 hover:decoration-amber-600 transition-colors"
            >
              Contactar
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
              <motion.div
                style={{ y: scrollY * -0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-200 dark:from-neutral-800 dark:to-neutral-900 rounded-sm shadow-2xl"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-4 bg-stone-900 dark:bg-neutral-100 rounded-sm overflow-hidden">
                <img 
                  src="/floreado.jpg" 
                  alt="Artesanía en cuero"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent dark:from-neutral-100/50" />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-amber-600/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-8 right-8"
      >
        <div className="flex justify-between items-center py-6 border-t border-stone-200 dark:border-neutral-800">
          <div className="flex items-center gap-12">
            {[
              { number: "500+", label: "Piezas únicas" },
              { number: "15", label: "Años maestría" },
              { number: "100%", label: "Hecho a mano" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-medium text-stone-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="text-xs text-stone-500 dark:text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-stone-400 dark:text-neutral-500"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-current" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}