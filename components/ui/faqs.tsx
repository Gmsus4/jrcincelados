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

function FAQs({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: index * 0.05 }}
  className="bg-white border border-gray-200 rounded-xl overflow-hidden" // Mueve estilos aquí
>
  <button
    onClick={onToggle}
    className="w-full py-5 px-4 text-left flex items-center justify-between cursor-pointer gap-3"
  >
    <h3 className="text-base md:text-2xl pl-4 font-medium text-neutral-800 pr-6 group-hover:text-neutral-900 dark:group-hover:text-white">
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
        <div className="px-4 pb-5 pl-10 md:text-lg text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
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
    <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-3 rounded-xl overflow-hidden flex flex-col gap-6"
          >
            {faqs.map((faq, index) => (
              <FAQs
                key={faq.id}
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
                index={index}
              />
            ))}
          </motion.div>
    </section>
  );
}
