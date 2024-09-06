interface CoursePart {
  name: string
  exerciseCount: number
}

interface Props {
  parts: CoursePart[]
}

export function Content({ parts }: Props) {
  return (
    <>
      {parts.map(part => (
        <p>{part.name} {part.exerciseCount}</p>
      ))}
    </>
  )
}
