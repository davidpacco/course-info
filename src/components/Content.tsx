import { Part } from "../Part"
import { CoursePart } from "../types"

interface Props {
  courseParts: CoursePart[]
}

export function Content({ courseParts }: Props) {
  return (
    <>
      {courseParts.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </>
  )
}
