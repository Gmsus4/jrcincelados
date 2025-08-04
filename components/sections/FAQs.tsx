
import { IconBrandTiktok } from "@tabler/icons-react"
import { ButtonSimple } from "../ui/btn"
import { Title } from "../ui/title"
import { FAQSection } from "../ui/faqs"
import { socialMedia } from "@/data/contact-info"

export const FAQs = () => {
  return (
    <div className="md:min-h-screen h-auto w-full bg-white" id="faqs">
        <div className="grid grid-cols-5 gap-10 items-start max-w-7xl m-auto md:p-20 sm:p-10 sm:pt-36 p-4">
            <div className="2xl:col-span-2 col-span-5 2xl:sticky 2xl:top-30 self-start flex flex-col gap-6 items-center justify-center 2xl:items-start 2xl:justify-start h-fit">
                <div className="grid place-items-center">
                    <Title title="FAQs" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl text-dark text-center 2xl:text-start">Preguntas frecuentes</h2>
                    <p className="text-xl text-gray-700 text-center 2xl:text-start">
                        Encuentra respuestas claras sobre nuestros productos artesanales y procesos.
                    </p>
                </div>

                  {/* TikTok promo section - Desktop */}
                <div className="hidden 2xl:flex flex-col items-start text-left gap-4 border-l-4 border-dark pl-6 py-4">
                    <h3 className="text-xl font-medium text-dark">¿Quieres ver más sobre cincelados?</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                        Descubre técnicas, herramientas y procesos en nuestra cuenta de TikTok.
                    </p>
                    <ButtonSimple 
                        isTargetBlank={true} 
                        title="Ver en TikTok" 
                        href={socialMedia[1].href} 
                        icon={<IconBrandTiktok className="text-white w-4 h-4" />} 
                    />
                </div>
            </div>

            <div className="2xl:col-span-3 col-span-5"> 
                <FAQSection />

                {/* TikTok promo section - Mobile */}
                <div className="2xl:hidden flex flex-col items-center justify-center text-center gap-4 w-full border border-gray-200 bg-gray-50 p-6 my-10 rounded-lg">
                    <h3 className="text-xl font-medium text-dark">¿Quieres ver más sobre cincelados?</h3>
                    <p className="text-base text-gray-600 max-w-md leading-relaxed">
                        Descubre técnicas, herramientas y procesos en nuestra cuenta de TikTok.
                    </p>
                    <ButtonSimple 
                        isTargetBlank={true} 
                        title="Ver en TikTok" 
                        href={socialMedia[1].href} 
                        icon={<IconBrandTiktok className="text-white w-4 h-4" />} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
