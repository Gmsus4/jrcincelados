"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { IconHome, IconStarFilled } from "@tabler/icons-react";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [testimonial, setTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * testimonials.length);
    setTestimonial(testimonials[random]);
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-neutral-100 text-neutral-800">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <div className="grid">
          <Title title="404 - Página no encontrada" />
        </div>
        <h2 className="text-5xl text-center text-dark">Esta página no existe</h2>
        <p className="text-xl text-gray-700 text-center">
          Pero ya que estás aquí, escucha lo que opinan quienes han vivido la experiencia de recibir un cinturón artesanal.
        </p>
      </div>

      <div className="mt-10 bg-white border border-neutral-200 rounded-xl shadow-md p-6 max-w-md w-full text-center">
        <p className="text-lg italic text-neutral-700 mb-4">"{testimonial.quote}"</p>
        <div className="flex items-center justify-between text-sm text-neutral-800">
          <span className="font-semibold">{testimonial.name}</span>
          <div className="flex gap-1 text-yellow-500">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <IconStarFilled key={i} size={16} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Button title="Volver al inicio" url="/" icon={<IconHome className="text-white"/>}/>
      </div>
    </main>
  );
}
