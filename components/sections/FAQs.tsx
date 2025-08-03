
import { Icon24Hours } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { Title } from "../ui/title"
import { FAQSection } from "../ui/faqs"

export const FAQs = () => {
  return (
    <div className="md:min-h-screen h-auto w-full bg-white">
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
                <Button title="Work with us" url="/contact" icon={<Icon24Hours className="text-white" />} />
            </div>

            <div className="2xl:col-span-3 col-span-5"> 
                <FAQSection />
            </div>
        </div>
    </div>
  )
}
