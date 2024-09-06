interface Props {
  total: number
}

export function Total({ total }: Props) {
  return (
    <p>Number of exercises {total}</p>
  )
}
