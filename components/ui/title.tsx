type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <span className="self-start text-white bg-dark px-4 py-1 rounded-full">{title}</span>
  )
}
