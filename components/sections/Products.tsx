"use client";

import { IconShoppingBag, IconStar, IconX, IconClock, IconPalette, IconTool, IconPhoneCall } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { ButtonSimple } from "../ui/btn";
import { Title } from "../ui/title";
import { products as productos } from "@/data/products";
import { contact } from "@/data/contact-info";
import Image from "next/image";

interface ProductCardProps {
  producto: typeof productos[0];
  index: number;
  onOpenModal: (producto: typeof productos[0]) => void;
}

function ProductCard({ producto, index, onOpenModal }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!imageError) {
      setImageError(true);
      const target = e.target as HTMLImageElement;
      target.src = `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(index * 0.05, 0.3),
        ease: "easeOut"
      }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between gap-0 will-change-transform"
    >
      <div>
        {/* Imagen del producto */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <div className="w-full h-full">
            <Image
              quality={95}
              width={1200}
              height={800}
              unoptimized={true}
              src={producto.image}
              alt={producto.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Badge de categoría y disponibilidad */}
          <div className="absolute top-3 left-3 flex flex-row gap-2">
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              {producto.category}
            </span>
            {producto.available ? (
              <span className="inline-flex items-center bg-green-100/90 backdrop-blur-sm text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                Disponible
              </span>
            ) : (
              <span className="inline-flex items-center bg-red-100/90 backdrop-blur-sm text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                Agotado
              </span>
            )}
          </div>
        </div>

        {/* Contenido del producto */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-neutral-800 leading-tight">
              {producto.name}
            </h3>
            <div className="flex items-center gap-1 ml-2 flex-shrink-0">
              <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{producto.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {producto.description}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-end justify-between">
          <div>
            <span className="md:text-lg text-gray-500 text-sm">Desde</span>
            <div className="text-2xl font-bold text-neutral-800">
              {producto.price}
            </div>
          </div>
          
          <button
            onClick={() => onOpenModal(producto)}
            className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
          >
            Más información
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductSectionProps {
  productos: typeof productos;
  onOpenModal: (producto: typeof productos[0]) => void;
}

function ProductSection({ productos, onOpenModal }: ProductSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map((producto, index) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          index={index}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}

// Modal de información del producto
interface ProductModalProps {
  producto: typeof productos[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ producto, isOpen, onClose }: ProductModalProps) {
  const [imageError, setImageError] = useState(false);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Compensar scrollbar
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!imageError) {
      setImageError(true);
      const target = e.target as HTMLImageElement;
      target.src = `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center`;
    }
  };

  if (!producto) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center md:p-4 p-0 z-50"
          onClick={onClose}
          style={{ isolation: 'isolate' }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.25, 
              ease: "easeOut",
              type: "tween"
            }}
            className="bg-white md:rounded-2xl rounded-none max-w-4xl w-full md:max-h-[90vh] h-full md:h-auto overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex md:flex-row flex-col w-full h-full md:max-h-[90vh]">
              {/* Imagen del producto */}
              <div className="md:w-1/2 w-full relative bg-gray-100 h-[40vh] md:h-auto md:min-h-0">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="eager"
                />
                <div className="absolute top-4 right-4 flex flex-row gap-2">
                  <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {producto.category}
                  </span>
                  {producto.available ? (
                    <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      Disponible
                    </span>
                  ) : (
                    <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      Agotado
                    </span>
                  )}
                </div>
                {/* Botón cerrar para móvil */}
                <div className="absolute top-4 left-4 md:hidden">
                  <button
                    onClick={onClose}
                    className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-colors duration-200 cursor-pointer shadow-lg"
                    aria-label="Cerrar modal"
                  >
                    <IconX className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Información del producto */}
              <div className="md:w-1/2 w-full md:p-8 p-6 overflow-y-auto flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 md:mr-4 mr-0">
                    <h2 className="md:text-3xl text-2xl font-bold text-neutral-800 mb-2">
                      {producto.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="md:text-3xl text-2xl font-bold text-neutral-800">
                        {producto.price}
                      </span>
                    </div>
                  </div>
                  {/* Botón cerrar para escritorio */}
                  <button
                    onClick={onClose}
                    className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0"
                    aria-label="Cerrar modal"
                  >
                    <IconX className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Descripción completa */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Descripción</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {producto.fullDescription}
                  </p>
                </div>

                {/* Información técnica */}
                <div className="space-y-6 pb-6 md:pb-0">
                  {/* Tiempo de elaboración */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <IconClock className="w-5 h-5 text-neutral-600" />
                      <h4 className="font-semibold text-neutral-800">Tiempo de elaboración</h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">{producto.productionTime}</p>
                  </div>

                  {/* Materiales */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <IconTool className="w-5 h-5 text-neutral-600" />
                      <h4 className="font-semibold text-neutral-800">Materiales</h4>
                    </div>
                    <ul className="text-gray-600 text-sm pl-7 space-y-1">
                      {producto.materials.map((material, index) => (
                        <li key={index}>• {material}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Colores disponibles */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <IconPalette className="w-5 h-5 text-neutral-600" />
                      <h4 className="font-semibold text-neutral-800">Colores disponibles</h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      {producto.availableColors.join(", ")}
                    </p>
                  </div>

                  {/* Personalización */}
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Personalización</h4>
                    <p className="text-gray-600 text-sm">
                      {producto.customization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const Products = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [modalProducto, setModalProducto] = useState<typeof productos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categorias = useMemo(() => 
    ["Todos", ...Array.from(new Set(productos.map(p => p.category)))], 
    []
  );
  
  const productosFiltrados = useMemo(() => 
    filtroCategoria === "Todos" 
      ? productos 
      : productos.filter(p => p.category === filtroCategoria),
    [filtroCategoria]
  );

  const openModal = (producto: typeof productos[0]) => {
    setModalProducto(producto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalProducto(null), 150);
  };

  return (
    <>
      <div className="md:min-h-screen h-auto w-full bg-gray-50 pb-20" id="products">
        <div className="max-w-7xl mx-auto md:p-20 sm:p-10 sm:pt-36 p-4">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="grid place-items-center mb-6">
              <Title title="Productos" />
            </div>
            <h2 className="text-5xl text-neutral-800 mb-4">
              Nuestra Colección
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Conoce nuestros productos artesanales de cuero genuino, 
              hechos a mano con técnicas tradicionales y los mejores materiales.
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroCategoria(categoria)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  filtroCategoria === categoria
                    ? "bg-neutral-800 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:shadow-md"
                }`}
              >
                {categoria}
              </button>
            ))}
          </motion.div>

          {/* Grid de productos */}
          {productosFiltrados.length > 0 ? (
            <ProductSection productos={productosFiltrados} onOpenModal={openModal} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <IconShoppingBag className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
                  No hay productos en {filtroCategoria.toLowerCase()}
                </h3>
                <p className="text-gray-600 mb-6">
                  Actualmente no tenemos productos en esta categoría, pero podemos crear algo especial para ti.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => setFiltroCategoria("Todos")}
                    className="block w-full px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium transform hover:scale-105"
                  >
                    Ver todos los productos
                  </button>
                  <button className="block w-full px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-gray-50 transition-colors font-medium transform hover:scale-105">
                    Solicitar producto personalizado
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
              ¿Te interesa algún producto?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para conocer más detalles, precios personalizados y tiempos de entrega
            </p>
            <ButtonSimple title="Llámanos" href={contact[0].href} icon={<IconPhoneCall className="text-white" />} />
          </motion.div>
        </div>
      </div>

      {/* Modal como portal separado */}
      <ProductModal 
        producto={modalProducto}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};