"use client";

import { IconPlus } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "¿Cuánto tiempo toma hacer un producto personalizado?",
    answer:
      "El tiempo de elaboración varía según la complejidad del producto. Los cintos simples toman entre 3-5 días laborales, mientras que productos más elaborados como bolsos o fundas personalizadas pueden tomar de 1-2 semanas. Te daremos un tiempo estimado específico al momento de la cotización.",
  },
  {
    id: 2,
    question: "¿Qué tipo de cuero utilizan?",
    answer:
      "Trabajamos exclusivamente con cuero genuino de primera calidad. Utilizamos cuero vacuno curtido al vegetal, que es más duradero y desarrolla una hermosa pátina con el tiempo. También ofrecemos opciones en cuero de cabra y búfalo para productos específicos.",
  },
  {
    id: 3,
    question: "¿Puedo personalizar completamente mi producto?",
    answer:
      "¡Absolutamente! Puedes elegir el color del cuero, tipo de costura, hebillas, grabados personalizados, tamaños específicos y más. Trabajamos contigo para crear exactamente lo que tienes en mente. Enviamos bocetos para tu aprobación antes de comenzar.",
  },
  {
    id: 4,
    question: "¿Ofrecen garantía en sus productos?",
    answer:
      "Sí, todos nuestros productos tienen garantía de 1 año contra defectos de fabricación. El cuero genuino está diseñado para durar décadas con el cuidado adecuado. También ofrecemos servicios de reparación y mantenimiento.",
  },
  {
    id: 5,
    question: "¿Cómo debo cuidar mis productos de cuero?",
    answer:
      "Te proporcionamos instrucciones detalladas de cuidado con cada producto. En general, recomendamos limpiar con un paño húmedo, aplicar acondicionador de cuero cada 3-6 meses, y evitar la exposición directa al sol y humedad excesiva.",
  },
  {
    id: 6,
    question: "¿Hacen envíos a toda la República Mexicana?",
    answer:
      "Sí, enviamos a todo México a través de paqueterías confiables. Los envíos dentro de la Ciudad de México son gratuitos en compras mayores a $800. Para el interior de la república, el costo de envío se calcula según el peso y destino.",
  },
  {
    id: 7,
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer:
      "Aceptamos transferencias bancarias, depósitos en efectivo, tarjetas de crédito y débito. Para productos personalizados, solicitamos un anticipo del 50% para comenzar el trabajo y el resto al momento de la entrega.",
  },
  {
    id: 8,
    question: "¿Pueden hacer productos para empresas o eventos especiales?",
    answer:
      "¡Por supuesto! Ofrecemos servicios para empresas, bodas, eventos corporativos y regalos personalizados en cantidad. Manejamos descuentos especiales para pedidos al mayoreo y podemos incluir logos o diseños específicos.",
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-4 text-left flex items-center justify-between group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
      >
        <h3 className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200 pr-6 group-hover:text-neutral-900 dark:group-hover:text-white">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white"
        >
          <IconPlus className="w-full h-full" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-neutral-50 dark:bg-neutral-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4"
          >
            Preguntas frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base"
          >
            Encuentra respuestas claras sobre nuestros productos artesanales y procesos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Lista de FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white col-span-3 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
                index={index}
              />
            ))}
          </motion.div>
          

           {/* Imagen a la derecha */}
          <div className="col-span-1 hidden md:flex items-center justify-center">
            <img 
              src="https://img.freepik.com/fotos-premium/trabajo-artesanal-profesional-taller_23-2148801562.jpg" 
              alt="Taller artesanal" 
              className="rounded-xl shadow-md object-cover w-full h-[553px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
