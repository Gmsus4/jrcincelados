import Link from "next/link"
import { Title } from "../ui/title"
import Image from "next/image";
import { contact as contactInfo, socialMedia, imageContact } from "@/data/contact-info";

export const Contact = () => {
  return (
    <div className="h-auto w-full place-items-center grid md:bg-white bg-darkB px-4 py-8 md:px-0 md:py-0" id="contact">
      {/* Nuevo div verde con márgenes */}
      <div className="w-[98%] h-[98%] bg-darkB rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-5 gap-20 max-w-7xl m-auto md:p-20 sm:p-10 sm:pt-36 p-4 w-full">
          <div className="flex flex-col gap-14 items-start 2xl:col-span-3 col-span-5">
              <div className="flex flex-col gap-4">
                  <div className="grid 2xl:place-items-start md:place-items-center place-items-start">
                    <Title title="Contacto" />
                  </div>
                  <h2 className="text-5xl text-start md:text-center 2xl:text-start text-white">Estamos listos para ayudarte</h2>
                  <p className="text-xl text-gray-400 md:text-center 2xl:text-start">Escríbenos y descubre cómo podemos crear algo hecho a mano especialmente para ti, cuidando cada detalle del proceso.</p>
              </div>
              <div className="flex flex-col w-full gap-4">
                  {contactInfo.map((item, index) => (
                      <div key={index} className="flex md:flex-row flex-col justify-between items-start">
                        <Link href={item.href} className="flex md:gap-2 gap-2 items-start hover:underline" target="_blank">
                          <item.icon className="h-6 w-6 text-neutral-800 dark:text-neutral-200"/>
                          <h3 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
                              {item.title}
                          </h3>
                        </Link>
                        <Link href={item.href} target="_blank" className="hover:underline">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1 break-all">
                                {item.value}
                            </p>
                        </Link>
                      </div>
                  ))}
              </div>
              
              {/* Línea divisoria */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              
              <div className="flex flex-col gap-6 font-bold text-lg">
                <span className="text-neutral-200">Síguenos</span>
                <div className="flex gap-2 items-center justify-start">
                    {socialMedia.map((social, index) => (
                        <Link 
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.color} transition-colors duration-300`}
                        >
                            <social.icon className="h-8 w-8 text-neutral-800 dark:text-neutral-200"/>
                        </Link>
                    ))}
                </div>
              </div>
          </div>
          <div className="2xl:col-span-2 col-span-5 rounded-xl hidden 2xl:flex relative h-[auto] w-full">
            <Image
              src={imageContact}
              fill
              className="object-cover rounded-xl"
              alt="Imagen de contacto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}