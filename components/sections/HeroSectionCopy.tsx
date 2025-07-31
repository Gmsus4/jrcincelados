"use client";


import { motion } from "motion/react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Image
        src="/floreado.jpg"
        alt="Fondo de cuero"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 -z-10 bg-black/30 dark:bg-black/80" />
      <div className="px-4 py-10 md:py-20 relative">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-light md:text-4xl lg:text-7xl dark:text-light">
          {"Cincelado de cuero con calidad artesanal"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        {/* <ContainerTextFlip
            className="absolute top-6 left-1/2 -translate-x-1/2"
            words={["Artesanal", "Único", "Elegante", "Duradero", "Tradicional", "Exclusivo", "Auténtico", "Personalizado", "Clásico", "Hecho a mano"]}
        /> */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-light/80"
        >
            Cada pieza es única, hecha con tradición y materiales de calidad. Transformamos el cuero en arte funcional.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="cursor-pointer w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 dark:bg-light dark:text-dark">
            Ver productos
          </button>
          <button className="cursor-pointer w-60 transform rounded-lg border border-light/30 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 dark:bg-dark dark:text-light">
            Contáctanos
          </button>
        </motion.div>
      </div>
    </div>
  );
}