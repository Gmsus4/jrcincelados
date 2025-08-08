import Image from "next/image"
import { Title } from "../ui/title"

export const AboutUs = () => {
  return (
    <div className="w-full md:h-auto bg-white" id="about">
      <div className="max-w-[1500px] m-auto md:grid md:grid-cols-12 flex flex-col gap-10 items-center justify-start md:p-20 p-10 pt-36">
        {/* Título principal */}
        <div className="w-full flex flex-col gap-2 2xl:col-span-4 col-span-12">
          <Title title={"Sobre nosotros"}/>
          <h2 className="text-black text-5xl">Diseño con carácter y propósito</h2>
        </div>
        
        {/* Descripción principal */}
        <p className="text-xl 2xl:text-2xl text-gray-700 w-auto 2xl:col-span-8 col-span-12">
          En JR Cincelados, creemos que los pequeños detalles dicen mucho. Nos especializamos en la creación de cintos y otros complementos que no solo cumplen una función, sino que también reflejan estilo, autenticidad y personalidad. Cada pieza nace de un proceso cuidadoso en el que seleccionamos materiales de calidad y trabajamos con dedicación para lograr productos duraderos y bien pensados.
        </p>

        {/* Imagen del taller */}
        <div className="w-full col-span-12 my-8">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image 
              quality={95}
              width={1200}
              height={800}
              unoptimized={true}
              src="/taller.webp" 
              alt="Taller artesanal de JR Cincelados mostrando herramientas de cuero y trabajo en proceso"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-medium">Nuestro taller artesanal</p>
            </div>
          </div>
        </div>

        {/* Sección de valores y filosofía con imagen */}
        <div className="w-full 2xl:col-span-7 col-span-12 flex flex-col justify-start gap-6 ">
          <h3 className="text-black text-3xl font-semibold">Nuestra filosofía</h3>
          <p className="text-lg text-gray-700">
            Cada cinto que creamos cuenta una historia. Desde el cuero cuidadosamente seleccionado hasta las hebillas trabajadas a mano, buscamos que nuestros productos sean una extensión de quien los porta. No fabricamos accesorios en serie; creamos piezas únicas que acompañan momentos importantes y se convierten en parte de la identidad de cada persona.
          </p>
          <p className="text-lg text-gray-700">
            La tradición artesanal se encuentra con técnicas modernas en nuestro taller, donde cada corte, cada puntada y cada acabado refleja años de experiencia y pasión por el oficio.
          </p>
        </div>

        {/* Imagen de proceso artesanal */}
        <div className="w-full 2xl:col-span-5 col-span-12">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              quality={95}
              width={1200}
              height={800}
              unoptimized={true}
              src="/procesoArtesanal.webp" 
              alt="Manos de artesano trabajando cuero con herramientas tradicionales"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
          </div>
        </div>

        {/* Imagen de materiales de calidad */}
        <div className="w-full 2xl:col-span-5 col-span-12">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image 
              quality={95}
              width={1200}
              height={800}
              unoptimized={true}
              src="/materiales.webp" 
              alt="Selección de cueros de primera calidad en diferentes tonos y texturas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sección de proceso y calidad con imagen */}
        <div className="w-full 2xl:col-span-7 col-span-12 flex flex-col gap-6">
          <h3 className="text-black text-3xl font-semibold">Compromiso con la calidad</h3>
          <p className="text-lg text-gray-700">
            Trabajamos exclusivamente con cueros de primera calidad, seleccionados por su durabilidad y belleza natural. Nuestro proceso de curtido respeta tanto las tradiciones artesanales como los estándares modernos de calidad, garantizando productos que mejoran con el tiempo.
          </p>
          <p className="text-lg text-gray-700">
            Cada hebilla, cada remache y cada detalle decorativo es elegido con cuidado para complementar el diseño general y asegurar que el resultado final sea una pieza que perdure por años, desarrollando su propia pátina y carácter único.
          </p>
        </div>

        {/* Galería de productos terminados */}
        <div className="w-full col-span-12 mt-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                quality={95}
                width={1200}
                height={800}
                src="/producto1.webp" 
                alt="Cinto clásico de cuero marrón con hebilla elegante"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                quality={95}
                width={1200}
                height={800} 
                src="/producto2.webp" 
                alt="Cinto personalizado con grabado especial"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                quality={95}
                width={1200}
                height={800} 
                src="/producto3.webp" 
                alt="Colección de accesorios de cuero artesanales"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Sección de experiencia con imagen de fondo */}
        <div className="w-full col-span-12 mt-8 pt-8">
          <div className="relative bg-gray-50 rounded-lg p-8 md:p-12">
            {/* Imagen de fondo sutil */}
            <div className="absolute inset-0 opacity-5">
              <Image 
                quality={95}
                width={1200}
                height={800} 
                src="/textura.webp" 
                alt="Patrón de textura de cuero"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative z-10 md:grid md:grid-cols-2 flex flex-col gap-8">
              <div>
                <h4 className="text-black text-2xl font-semibold mb-4">Creación constante</h4>
                <p className="text-lg text-gray-700">
                  Este taller nace del impulso de explorar lo artesanal con respeto y curiosidad. Aunque el proyecto es reciente, cada paso nos enseña algo nuevo. Lo vivimos con entrega y atención al detalle, y cada pieza refleja nuestro compromiso por perfeccionar el oficio con autenticidad y pasión.
                </p>
              </div>
              <div>
                <h4 className="text-black text-2xl font-semibold mb-4">Personalización</h4>
                <p className="text-lg text-gray-700">
                  Entendemos que cada cliente es único. Por eso ofrecemos servicios de personalización que van desde grabados especiales hasta diseños completamente a medida, asegurando que cada pieza sea verdaderamente suya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción sutil */}
        <div className="w-full col-span-12 text-center mt-8">
          <p className="text-xl text-gray-600 italic">
            "Creamos más que accesorios; forjamos compañeros de vida que cuentan tu historia."
          </p>
        </div>
      </div>
    </div>
  )
}