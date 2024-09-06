interface Props {
  name: string
}

export function Header({ name }: Props) {
  return (
    <h1>{name}</h1>
  )
}
