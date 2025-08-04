type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <span className="self-start text-white bg-dark px-4 py-1 rounded-full">{title}</span>
  )
}



                // <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                //   {contact.map((info, index) => (
                //     <li className="flex items-center gap-2" key={index}>
                //       <info.icon size={16} /> 
                //     </li>
                //   ))}
                // </ul>