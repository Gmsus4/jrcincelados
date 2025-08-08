"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { IconBrandWhatsappFilled, IconShoppingBag } from "@tabler/icons-react";
import { contact } from "@/data/contact-info";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-neutral-950 overflow-hidden h-screen grid grid-cols-12 gap-0 sm:items-end justify-center 2xl:items-center items-center">
      <div className="col-span-12 flex 2xl:items-center items-start justify-center flex-col z-30 2xl:col-span-7 w-full md:p-20 p-10 2xl:ml-16">
        <div className="rounded-2xl h-full flex flex-col items-start justify-center gap-6 2xl:w-2xl w-full">
          <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900 text-green-300">
              <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
              Calidad Artesanal
          </span>
          <span className="md:text-6xl text-5xl text-white">Cada pieza habla de autenticidad, fuerza y dedicación.</span>
          <h1 className="md:text-2xl text-xl 2xl:w-full md:w-4/5 w-full text-caballo">Creamos cinturones, fundas y accesorios de cuero, <br /> hechos a mano para quienes valoran lo auténtico y duradero.</h1>
          {/* <Button title="Work with us" btnColor="bg-dark" textColor="text-white" circleColor="bg-white" btnColorFull="bg-white" textColorHover="text-dark" url="/contact" icon={<Icon24Hours className="text-dark" />} /> */}
          <div className="flex md:flex-row flex-col gap-4">
            <Button title="Ver productos" circleColor="bg-white" btnColorFull="bg-white" btnColor="bg-darkB" textColor="text-white" textColorHover="group-hover:text-dark" url={`#products`} icon={<IconShoppingBag className="text-dark"/>}/>
            <Button isTargetBlank={true} title="Contáctanos por WhatsApp" circleColor="bg-green-500" btnColorFull="bg-green-500" btnColor="bg-darkB" textColor="text-white" textColorHover="group-hover:text-white" url={contact[1].href} icon={<IconBrandWhatsappFilled className="text-white"/>} />
          </div>
        </div>
      </div>
      <div className="p-5 col-span-5 rounded-4xl overflow-hidden h-screen hidden 2xl:flex inset-0">
        <Image
          alt=""
          src="/hero.webp"
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
          src="/hero.webp"
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