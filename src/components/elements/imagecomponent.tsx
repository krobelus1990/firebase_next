interface Props {
  readonly src: string
  readonly alt: string
  readonly height?: number
  readonly width?: number
  readonly className?: string
}

export const ImageComponent: React.FC<Props> = (props) => {
  return <img src={props.src} alt={props.alt} height={props.height} width={props.width} className={props.className} />
}
