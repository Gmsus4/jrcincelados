import Link from "next/link"; // o usa <a> si no usas Next.js
import { IconClick } from "@tabler/icons-react";

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  url: string;

  btnColor?: string;
  btnColorFull?: string;

  textColor?: string;
  textColorHover?: string;

  circleColor?: string;
};

export const Button = ({ title, icon = <IconClick className="text-white" />, url, btnColor = "bg-whiteA", btnColorFull = "bg-dark", textColor = "text-dark", textColorHover = "group-hover:text-white", circleColor = "bg-dark" }: ButtonProps) => {
  return (
    <Link href={url} passHref>
      <div className={`relative group rounded-full cursor-pointer ${btnColor} py-3 pl-6 pr-3 inline-flex gap-4 items-center overflow-hidden transition-colors duration-300`}>
        {/* Círculo que se expande al hacer hover */}
        <div className={`absolute w-8 h-8 ${btnColorFull} rounded-full right-3 top-1/2 -translate-y-1/2 scale-100 group-hover:scale-[10] transition-transform duration-900 ease-out`}></div>

        {/* Texto */}
        <span className={`relative z-10 ${textColor} ${textColorHover} transition-colors duration-700 delay-100`}>
          {title}
        </span>

        {/* Ícono */}
        <div className={`relative z-10 p-2 ${circleColor} rounded-full`}>
          {icon}
        </div>
      </div>
    </Link>
  );
};
