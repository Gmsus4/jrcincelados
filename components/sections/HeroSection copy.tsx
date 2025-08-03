"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Icon24Hours, IconBrandWhatsappFilled, IconEye } from "@tabler/icons-react";

export function HeroSectionCopy() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-stone-50 dark:bg-neutral-950 overflow-hidden h-screen grid grid-cols-12 gap-0 sm:items-end justify-center 2xl:items-center items-center">
      <div className="col-span-12 flex 2xl:items-center items-start justify-center flex-col z-30 2xl:col-span-7 w-full md:p-20 p-10 2xl:ml-16">
        <div className="rounded-2xl h-full flex flex-col items-start justify-center gap-6 2xl:w-2xl w-full">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100/80 backdrop-blur-sm border border-amber-200/50 rounded-full">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-amber-800 font-medium text-xs uppercase tracking-wider">Calidad Artesanal</span>
          </div>
          <span className="md:text-6xl text-5xl">Cada pieza habla de autenticidad, fuerza y dedicación.</span>
          <h1 className="md:text-2xl text-xl 2xl:w-full md:w-4/5 w-full">Creamos cinturones, fundas y accesorios de cuero, <br /> hechos a mano para quienes valoran lo auténtico y duradero.</h1>
          {/* <Button title="Work with us" btnColor="bg-dark" textColor="text-white" circleColor="bg-white" btnColorFull="bg-white" textColorHover="text-dark" url="/contact" icon={<Icon24Hours className="text-dark" />} /> */}
          <Button title="Contáctanos" circleColor="bg-white" btnColorFull="bg-white" btnColor="bg-dark" textColor="text-white" textColorHover="group-hover:text-dark" url="/contact" icon={<IconBrandWhatsappFilled className="text-dark"/>} />

          {/* Investigar que pedo de por que no se pone el texto en negro al hacer hover */}
        </div>
      </div>
      <div className="p-5 col-span-5 rounded-4xl overflow-hidden h-screen hidden 2xl:flex inset-0">
        <Image
          alt=""
          src="https://images.pexels.com/photos/33010252/pexels-photo-33010252.jpeg"
          quality={95}
          width={1200}
          height={800}
          unoptimized={true}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="2xl:hidden flex absolute inset-0 z-10 h-screen ">
        <Image
          alt=""
          src="https://images.pexels.com/photos/33010252/pexels-photo-33010252.jpeg"
          quality={95}
          width={1200}
          height={800}
          unoptimized={true}
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
    </section>
  );
}