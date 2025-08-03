"use client"
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Title } from "../ui/title";
import { useState, useEffect, useRef, SetStateAction } from "react";
import { testimonials as dataTestimonials } from "@/data/testimonials";

const middleIndex = Math.ceil(dataTestimonials.length / 2);

const testimonials = dataTestimonials.slice(0, middleIndex);
const testimonials2 = dataTestimonials.slice(middleIndex);

export const Testimonials = () => {
    const allTestimonials = [...testimonials, ...testimonials2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    // Crear copias múltiples para scroll infinito suave
    const infiniteTestimonials = [...allTestimonials, ...allTestimonials, ...allTestimonials];
    const totalItems = allTestimonials.length;
    const startIndex = totalItems; // Empezar en la segunda copia
    
    useEffect(() => {
        // Inicializar en la posición del medio
        if (scrollRef.current) {
            const initialPosition = startIndex * scrollRef.current.offsetWidth;
            scrollRef.current.scrollLeft = initialPosition;
            setCurrentIndex(0); // Índice visual
        }
    }, []);
    
    const scrollToIndex = (visualIndex: number) => {
        if (scrollRef.current && !isScrolling) {
            setIsScrolling(true);
            const actualIndex = startIndex + visualIndex;
            const scrollLeft = actualIndex * scrollRef.current.offsetWidth;
            
            scrollRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            
            setCurrentIndex(visualIndex);
            
            // Reset del flag después de la animación
            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    };
    
    const handleScroll = () => {
        if (!scrollRef.current || isScrolling) return;
        
        // Limpiar timeout anterior
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.offsetWidth;
        const currentPosition = Math.round(scrollLeft / cardWidth);
        
        // Calcular el índice visual (0 a totalItems-1)
        let visualIndex = (currentPosition - startIndex + totalItems) % totalItems;
        if (visualIndex < 0) visualIndex += totalItems;
        
        setCurrentIndex(visualIndex);
        
        // Detectar si necesitamos resetear la posición para mantener el scroll infinito
        scrollTimeoutRef.current = setTimeout(() => {
            if (!scrollRef.current) return;
            
            const needsReset = currentPosition <= 2 || currentPosition >= infiniteTestimonials.length - 3;
            
            if (needsReset) {
                // Calcular nueva posición en el centro
                const newPosition = startIndex + visualIndex;
                const newScrollLeft = newPosition * cardWidth;
                
                // Resetear sin animación
                scrollRef.current.scrollTo({
                    left: newScrollLeft,
                    behavior: 'auto'
                });
            }
        }, 150);
    };
    
    // Limpiar timeout al desmontar
    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);
    
    return (
        <div className="w-full h-auto grid place-items-center gap-10 py-20 bg-white" id="testimonials">
            <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
                <div className="grid">
                    <Title title="Testimoniales"/>
                </div>
                <h2 className="text-5xl text-center text-dark">Escucha a nuestros clientes</h2>
                <p className="text-xl text-gray-700 text-center">Escuchar a quienes ya han vivido la experiencia de recibir un cinturón artesanal nos recuerda por qué seguimos cuidando cada corte, cada grabado y cada entrega.</p>
            </div>
            
            {/* Versión Desktop */}
            <div className="gap-6 hidden md:grid">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="slow"
                />
            </div>
            
            {/* Versión Mobile con carousel infinito */}
            <div className="md:hidden w-full max-w-full overflow-hidden">
                <div 
                    ref={scrollRef}
                    className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    onScroll={handleScroll}
                    style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <div className="flex" style={{ width: `${infiniteTestimonials.length * 100}%` }}>
                        {infiniteTestimonials.map((testimonial, index) => (
                            <div 
                                key={`testimonial-${index}`}
                                className="w-full flex-shrink-0 snap-center px-4"
                                style={{ width: `${100 / infiniteTestimonials.length}%` }}
                            >
                                <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-md">
                                    <blockquote className="h-full flex flex-col min-h-[300px]">
                                        {/* Estrellas */}
                                        <div className="flex gap-1 mb-4 justify-center">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span key={starIndex}>
                                                    {starIndex < testimonial.stars ? (
                                                        <IconStarFilled className="w-5 h-5 text-amber-400" />
                                                    ) : (
                                                        <IconStar className="w-5 h-5 text-gray-300" />
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Quote */}
                                        <p className="text-lg leading-relaxed text-gray-700 mb-6 flex-grow text-center">
                                            "{testimonial.quote}"
                                        </p>
                                        
                                        {/* Autor */}
                                        <div className="mt-auto text-center">
                                            <p className="text-xl font-medium text-gray-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Indicadores de puntos */}
                <div className="flex justify-center mt-6 gap-2">
                    {allTestimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? 'bg-amber-400 w-6'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ir al testimonio ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}