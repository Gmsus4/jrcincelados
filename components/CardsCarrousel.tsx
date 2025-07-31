"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, Carousel } from "./apple-cards-carousel";
import Image from "next/image";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full min-h-screen py-16 md:py-24">
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
            Nuestra colección
          </motion.p>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-500 mb-6 leading-tight"
          >
            Productos Artesanales
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cada pieza cuenta una historia de tradición y dedicación. 
            <span className="font-medium text-amber-700 dark:text-amber-300">
              {" "}Descubre la belleza del cuero trabajado a mano.
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

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Carousel items={cards} />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 md:px-6 mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Mejorado DummyContent con contenido más relevante
const ProductContent = ({ category, title, url }: { category: string; title: string; url: string }) => {
  const getProductInfo = (category: string) => {
    const info = {
      "Cinturones": {
        description: "Cinturones de cuero genuino con técnicas tradicionales de cincelado. Cada pieza es única y está diseñada para durar toda la vida.",
        features: ["Cuero 100% genuino", "Cincelado a mano", "Hebillas de alta calidad", "Acabados artesanales"],
        price: "Desde $1,200 MXN"
      },
      "Fundas": {
        description: "Fundas protectoras hechas con cuero de primera calidad. Perfectas para proteger tus objetos más preciados con estilo.",
        features: ["Protección premium", "Diseño personalizable", "Costuras reforzadas", "Acabado resistente"],
        price: "Desde $800 MXN"
      },
      "Bolsos": {
        description: "Bolsos artesanales que combinan funcionalidad y elegancia. Cada diseño refleja la tradición del trabajo en cuero.",
        features: ["Diseño exclusivo", "Múltiples compartimentos", "Materiales premium", "Hecho a medida"],
        price: "Desde $2,500 MXN"
      },
      "Accesorios": {
        description: "Accesorios únicos que complementan tu estilo personal. Pequeños detalles que hacen la gran diferencia.",
        features: ["Personalización disponible", "Grabado láser", "Acabados únicos", "Regalo perfecto"],
        price: "Desde $300 MXN"
      }
    };
    return info[category as keyof typeof info] || info["Cinturones"];
  };

  const productInfo = getProductInfo(category);

  return (
    <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Text Content */}
            <div className="flex-1 space-y-4 px-10">
              <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
                {productInfo.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-700 dark:text-neutral-200">
                  Características:
                </h4>
                <ul className="space-y-1">
                  {productInfo.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {productInfo.price}
                </span>
                {/* <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Ver detalles
                </button> */}
              </div>
            </div>

            <img src={url} alt="" className="w-[300px] h-full"/>

          </div>
        </motion.div>
    </div>
  );
};

// Stats data
const stats = [
  { number: "500+", label: "Productos creados" },
  { number: "10+", label: "Años de experiencia" },
  { number: "200+", label: "Clientes satisfechos" },
  { number: "100%", label: "Hecho a mano" }
];

// Datos mejorados con contenido más específico
const data = [
  {
    category: "Cinturones",
    title: "Cinturón de cuero con cincelado floral",
    src: "https://i.pinimg.com/originals/78/eb/2b/78eb2b3daa34cd0b219de17cd4227ac2.jpg",
    content: <ProductContent category="Cinturones" title="Cinturón de cuero con cincelado floral" url="https://i.pinimg.com/originals/78/eb/2b/78eb2b3daa34cd0b219de17cd4227ac2.jpg"/>
  },
  {
    category: "Fundas",
    title: "Funda personalizada para navaja",
    src: "https://tse1.explicit.bing.net/th/id/OIP.c3hLl-1CQLhQ_q_PycrhMwHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3",
    content: <ProductContent category="Fundas" title="Funda personalizada para navaja" url="https://tse1.explicit.bing.net/th/id/OIP.c3hLl-1CQLhQ_q_PycrhMwHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3"/>
  },
  {
    category: "Bolsos",
    title: "Bolso tote con diseño artesanal",
    src: "https://monpiel.com/img/cms/ES/Marroquineria/funda-ordenador-piel.jpg",
    content: <ProductContent category="Bolsos" title="Bolso tote con diseño artesanal" url="https://monpiel.com/img/cms/ES/Marroquineria/funda-ordenador-piel.jpg"/>
  },
  {
    category: "Accesorios",
    title: "Llaveros de cuero grabados",
    src: "https://i.etsystatic.com/9687719/r/il/5a589b/4553220874/il_570xN.4553220874_nwi1.jpg",
    content: <ProductContent category="Accesorios" title="Llaveros de cuero grabados" url="https://i.etsystatic.com/9687719/r/il/5a589b/4553220874/il_570xN.4553220874_nwi1.jpg" />
  },
  {
    category: "Cinturones",
    title: "Cinturón vaquero con pátina",
    src: "https://i.etsystatic.com/7981073/r/il/1551cc/5908954467/il_1080xN.5908954467_qwyn.jpg",
    content: <ProductContent category="Cinturones" title="Cinturón vaquero con pátina" url="https://i.etsystatic.com/7981073/r/il/1551cc/5908954467/il_1080xN.5908954467_qwyn.jpg"/>
  },
  {
    category: "Fundas",
    title: "Funda para celular en cuero premium",
    src: "https://i5.walmartimages.com/asr/dce21c7e-0543-4d70-8325-50fb7136e18b.b371fc99b7c29030e476d89842ba2a17.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    content: <ProductContent category="Fundas" title="Funda para celular en cuero premium" url="https://i5.walmartimages.com/asr/dce21c7e-0543-4d70-8325-50fb7136e18b.b371fc99b7c29030e476d89842ba2a17.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
  },
];