"use client";

import { IconShoppingBag, IconStar, IconX, IconClock, IconPalette, IconTool } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Title } from "../ui/title";
import Image from "next/image";

const productos = [
  {
    id: 1,
    nombre: "Cinturón Artesanal Clásico",
    descripcion: "Cinturón de cuero genuino curtido al vegetal, hecho a mano con técnicas tradicionales. Disponible en varios colores y con grabado personalizado.",
    descripcionCompleta: "Este cinturón artesanal está elaborado con cuero vacuno de primera calidad, curtido al vegetal siguiendo técnicas tradicionales que garantizan durabilidad y un envejecimiento hermoso. El proceso de curtido vegetal toma más tiempo pero resulta en un cuero más resistente y ecológico. Cada cinturón es cortado, cosido y terminado a mano por nuestros artesanos expertos. Incluye herrajes de latón sólido que no se oxidan con el tiempo. Disponible en anchos de 3.5cm y 4cm, y en colores negro, café, miel y natural. El grabado personalizado se realiza con técnicas de repujado tradicional.",
    precio: "$850",
    imagen: "https://images.pexels.com/photos/5103042/pexels-photo-5103042.jpeg",
    categoria: "Cinturones",
    rating: 4.9,
    disponible: true,
    tiempoElaboracion: "3-5 días laborales",
    materiales: ["Cuero vacuno curtido vegetal", "Herrajes de latón", "Hilo encerado"],
    coloresDisponibles: ["Negro", "Café", "Miel", "Natural"],
    personalizacion: "Grabado de nombre, iniciales o diseño simple"
  },
  {
    id: 2,
    nombre: "Bolso de Mano Premium",
    descripcion: "Elegante bolso de cuero de primera calidad con compartimentos internos y acabados de lujo. Perfecto para el uso diario o ocasiones especiales.",
    descripcionCompleta: "Bolso de mano elaborado con cuero de cabra de primera calidad, conocido por su suavidad y resistencia. El diseño incluye múltiples compartimentos internos con cremalleras YKK, bolsillos para tarjetas y un compartimento acolchado para tablet. El forro interior es de algodón orgánico con patrón exclusivo. Las asas están reforzadas con triple costura y remaches de cobre. Incluye cadena desmontable para usar como bolso cruzado. Cada pieza lleva un número de serie único grabado en el interior.",
    precio: "$2,450",
    imagen: "https://images.pexels.com/photos/33223468/pexels-photo-33223468.jpeg",
    categoria: "Bolsos",
    rating: 5.0,
    disponible: true,
    tiempoElaboracion: "1-2 semanas",
    materiales: ["Cuero de cabra premium", "Forro de algodón orgánico", "Herrajes de cobre", "Cremalleras YKK"],
    coloresDisponibles: ["Negro", "Café chocolate", "Burdeos", "Azul marino"],
    personalizacion: "Grabado interior, elección de forro, cadena personalizada"
  },
  {
    id: 3,
    nombre: "Cartera Minimalista",
    descripcion: "Cartera compacta de cuero búfalo con diseño minimalista. Incluye espacios para tarjetas y billetes con cierre magnético invisible.",
    descripcionCompleta: "Cartera ultra delgada diseñada para el estilo de vida moderno. Elaborada con cuero de búfalo genuino, conocido por su durabilidad excepcional y textura única. El diseño minimalista incluye 6 ranuras para tarjetas, un compartimento central para billetes y un bolsillo oculto para emergencias. El cierre magnético está completamente oculto en el diseño, manteniendo líneas limpias. La cartera mide solo 1.2cm de grosor cuando está llena. Cada esquina está redondeada y pulida a mano para mayor comodidad.",
    precio: "$650",
    imagen: "https://images.pexels.com/photos/4452504/pexels-photo-4452504.jpeg",
    categoria: "Carteras",
    rating: 4.8,
    disponible: false,
    tiempoElaboracion: "5-7 días laborales",
    materiales: ["Cuero de búfalo", "Imanes neodimio", "Hilo de poliéster reforzado"],
    coloresDisponibles: ["Negro", "Café oscuro", "Gris carbón"],
    personalizacion: "Grabado discreto de iniciales en interior"
  },
  {
    id: 4,
    nombre: "Funda para Laptop Personalizada",
    descripcion: "Protege tu laptop con estilo usando nuestra funda de cuero genuino. Disponible para diferentes tamaños con grabado personalizado incluido.",
    descripcionCompleta: "Funda protectora diseñada específicamente para laptops, con acolchado interno de neopreno de alta densidad que absorbe impactos. El exterior de cuero vacuno repele el agua y resiste rayones. Incluye un bolsillo frontal con cremallera para accesorios como mouse, cables y documentos. El cierre principal es con cremallera YKK resistente al agua. Interior forrado con microfibra suave que no raya la pantalla. Disponible para laptops de 13', 15' y 17'. Cada funda incluye grabado personalizado del nombre o logo sin costo adicional.",
    precio: "$1,200",
    imagen: "https://images.pexels.com/photos/5951375/pexels-photo-5951375.jpeg",
    categoria: "Fundas",
    rating: 4.9,
    disponible: true,
    tiempoElaboracion: "7-10 días laborales",
    materiales: ["Cuero vacuno tratado", "Acolchado de neopreno", "Forro de microfibra", "Cremallera impermeable"],
    coloresDisponibles: ["Negro", "Café", "Azul marino"],
    personalizacion: "Grabado de nombre o logo incluido, elección de posición del grabado"
  },
  {
    id: 5,
    nombre: "Llavero Artesanal",
    descripcion: "Pequeño pero significativo, nuestros llaveros de cuero son perfectos como regalo o para uso personal. Grabado personalizado disponible.",
    descripcionCompleta: "Llavero artesanal elaborado con retazos de cuero premium de nuestros otros productos, siguiendo nuestro compromiso con la sostenibilidad. Cada llavero es único debido a las variaciones naturales del cuero. El diseño clásico incluye una argolla de acero inoxidable de alta resistencia que no se rompe ni deforma. El cuero está tratado con aceites naturales que lo mantienen flexible y resistente al desgaste diario. Perfecto como regalo corporativo, recuerdo personal o detalle especial. El grabado se realiza con láser para mayor precisión y durabilidad.",
    precio: "$180",
    imagen: "https://images.pexels.com/photos/33242820/pexels-photo-33242820.jpeg",
    categoria: "Accesorios",
    rating: 4.7,
    disponible: true,
    tiempoElaboracion: "1-2 días laborales",
    materiales: ["Cuero premium reciclado", "Argolla de acero inoxidable", "Aceites naturales"],
    coloresDisponibles: ["Variados según disponibilidad"],
    personalizacion: "Grabado láser de texto o diseño simple"
  },
  {
    id: 6,
    nombre: "Mochila de Cuero Vintage",
    descripcion: "Mochila espaciosa de cuero envejecido con compartimentos para laptop y organizadores internos. Estilo vintage con durabilidad moderna.",
    descripcionCompleta: "Mochila de estilo vintage elaborada con cuero vacuno que ha sido tratado para lograr un acabado envejecido único. La capacidad de 25 litros la hace perfecta para uso diario, viajes cortos o como mochila universitaria. Cuenta con compartimento acolchado para laptop hasta 15', bolsillos organizadores internos, y dos bolsillos laterales de malla elástica. Las correas están acolchadas y son ajustables, con refuerzos en puntos de tensión. La parte posterior tiene un panel de ventilación para mayor comodidad. Incluye hebillas de latón envejecido que complementan el estilo vintage.",
    precio: "$3,200",
    imagen: "https://images.pexels.com/photos/9912145/pexels-photo-9912145.jpeg",
    categoria: "Mochilas",
    rating: 4.9,
    disponible: false,
    tiempoElaboracion: "2-3 semanas",
    materiales: ["Cuero vacuno envejecido", "Acolchado ergonómico", "Hebillas de latón", "Forro impermeable"],
    coloresDisponibles: ["Café vintage", "Negro desgastado", "Miel envejecido"],
    personalizacion: "Grabado en solapa frontal, elección de hebillas, correas personalizadas"
  }
];

interface ProductCardProps {
  producto: typeof productos[0];
  index: number;
  onOpenModal: (producto: typeof productos[0]) => void;
}

function ProductCard({ producto, index, onOpenModal }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between gap-0"
    >
    <div>
    {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: imageLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              // Fallback para imagen no encontrada
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center`;
            }}
          />
        </motion.div>
        
        {/* Badge de categoría y disponibilidad */}
        <div className="absolute top-3 left-3 flex flex-row gap-2">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {producto.categoria}
          </span>
          {producto.disponible ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Disponible
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Agotado
            </span>
          )}
        </div>
      </div>

      {/* Contenido del producto */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-neutral-800 leading-tight">
            {producto.nombre}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <IconStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{producto.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {producto.descripcion}
        </p>
      </div>
    </div>
    <div className="p-6 pt-0">
        <div className="flex items-end justify-between">
          <div>
            <span className="md:text-lg text-gray-500 text-sm">Desde</span>
            <div className="text-2xl font-bold text-neutral-800">
              {producto.precio}
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenModal(producto)}
            className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
          >
            Más información
          </motion.button>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {productos.map((producto, index) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          index={index}
          onOpenModal={onOpenModal}
        />
      ))}
    </motion.div>
  );
}

// Modal de información del producto
interface ProductModalProps {
  producto: typeof productos[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ producto, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !producto) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] md:overflow-hidden overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex md:flex-row flex-col w-full h-full md:max-h-[90vh]">
          {/* Imagen del producto */}
          <div className="md:w-1/2 w-full relative">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              quality={95}
              width={1200}
              height={800}
              unoptimized={true}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center`;
              }}
            />
            <div className="absolute top-4 right-4 flex flex-row gap-2">
              <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {producto.categoria}
              </span>
              {producto.disponible ? (
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Disponible
                </span>
              ) : (
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  Agotado
                </span>
              )}
            </div>
          </div>

          {/* Información del producto */}
          <div className="md:w-1/2 w-full p-8 md:overflow-y-auto overflow-visible">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-2">
                  {producto.nombre}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  {/* <div className="flex items-center gap-1">
                    <IconStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg text-gray-600">{producto.rating}</span>
                  </div> */}
                  <span className="text-3xl font-bold text-neutral-800">
                    {producto.precio}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <IconX className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Descripción completa */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Descripción</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {producto.descripcionCompleta}
              </p>
            </div>

            {/* Información técnica */}
            <div className="space-y-6">
              {/* Tiempo de elaboración */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconClock className="w-5 h-5 text-neutral-600" />
                  <h4 className="font-semibold text-neutral-800">Tiempo de elaboración</h4>
                </div>
                <p className="text-gray-600 text-sm pl-7">{producto.tiempoElaboracion}</p>
              </div>

              {/* Materiales */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconTool className="w-5 h-5 text-neutral-600" />
                  <h4 className="font-semibold text-neutral-800">Materiales</h4>
                </div>
                <ul className="text-gray-600 text-sm pl-7 space-y-1">
                  {producto.materiales.map((material, index) => (
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
                  {producto.coloresDisponibles.join(", ")}
                </p>
              </div>

              {/* Personalización */}
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">Personalización</h4>
                <p className="text-gray-600 text-sm">
                  {producto.personalizacion}
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            {/* <div className="flex gap-3 mt-8 pt-6 border-t">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-neutral-800 text-white py-3 px-6 rounded-lg hover:bg-neutral-700 transition-colors font-medium"
              >
                Solicitar cotización
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 border border-neutral-300 text-neutral-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Más información
              </motion.button>
            </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [modalProducto, setModalProducto] = useState<typeof productos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categorias = ["Todos", ...Array.from(new Set(productos.map(p => p.categoria)))];
  
  const productosFiltrados = filtroCategoria === "Todos" 
    ? productos 
    : productos.filter(p => p.categoria === filtroCategoria);

  const openModal = (producto: typeof productos[0]) => {
    setModalProducto(producto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProducto(null);
  };

  return (
    <div className="md:min-h-screen h-auto w-full bg-gray-50">
      <div className="max-w-7xl mx-auto md:p-20 sm:p-10 sm:pt-36 p-4">
        
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((categoria) => (
            <motion.button
              key={categoria}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFiltroCategoria(categoria)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filtroCategoria === categoria
                  ? "bg-neutral-800 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {categoria}
            </motion.button>
          ))}
        </div>

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <ProductSection productos={productosFiltrados} onOpenModal={openModal} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFiltroCategoria("Todos")}
                  className="block w-full px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors font-medium"
                >
                  Ver todos los productos
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Solicitar producto personalizado
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
            ¿Te interesa algún producto?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para conocer más detalles, precios personalizados y tiempos de entrega
          </p>
          <Button 
            title="Solicitar información" 
            url="/contact" 
            icon={<IconShoppingBag className="text-white" />} 
          />
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          <ProductModal 
            producto={modalProducto}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};