"use client";

import { IconPlus } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { faqs } from "@/data/faqs";

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
      className="w-6 h-6 text-neutral-400 group-hover:text-white"
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
        <div className="px-4 pb-5 pl-10 md:text-lg text-neutral-600 text-sm leading-relaxed">
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
