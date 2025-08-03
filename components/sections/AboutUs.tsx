import { Title } from "../ui/title"

export const AboutUs = () => {
  return (
    <div className="w-full md:h-screen h-auto bg-white">
      <div className="max-w-[1500px] m-auto md:grid md:grid-cols-12 flex flex-col gap-10 items-end justify-start md:p-20 p-10 pt-36">
        <div className="w-full flex flex-col gap-2 2xl:col-span-4 col-span-12">
          <Title title={"Sobre nosotros"}/>
          <h2 className="text-black text-5xl">Diseño con carácter y propósito</h2>
        </div>
        <p className="text-xl 2xl:text-2xl text-gray-700 w-auto 2xl:col-span-8 col-span-12">En JR Cincelados, creemos que los pequeños detalles dicen mucho. Nos especializamos en la creación de cintos y otros complementos que no solo cumplen una función, sino que también reflejan estilo, autenticidad y personalidad. Cada pieza nace de un proceso cuidadoso en el que seleccionamos materiales de calidad y trabajamos con dedicación para lograr productos duraderos y bien pensados.</p>
      </div>
    </div>
  )
}
