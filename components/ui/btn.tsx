import { IconClick } from "@tabler/icons-react";
import Link from "next/link"
type BtnProps = {
    href: string;
    icon?: React.ReactNode;
    title?: string;
    isTargetBlank?: boolean;
    isBgDark?: boolean;
}

export const ButtonSimple = ({title = "Something...", icon = <IconClick className="w-5 h-5"/>, href, isTargetBlank = false, isBgDark = true}:BtnProps) => {
  return (
    <Link
        href={href}
        target={isTargetBlank ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${isBgDark ? "bg-black hover:bg-black/90 text-white" : "bg-white hover:bg-white/90 text-dark"} px-6 py-3 rounded-full transition`}
    >
        {icon}
        {title}
    </Link>
  )
}
