import { CoursePart } from "./types";

interface Props {
  part: CoursePart
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}

export function Part({ part }: Props) {
  switch (part.kind) {
    case 'basic':
      return (
        <p>
          <strong>{part.name} {part.exerciseCount}</strong><br />
          <em>{part.description}</em>
        </p>
      )
    case 'group':
      return (
        <p>
          <strong>{part.name} {part.exerciseCount}</strong><br />
          <em>Project exercises {part.groupProjectCount}</em>
        </p>
      )
    case 'background':
      return (
        <p>
          <strong>{part.name} {part.exerciseCount}</strong><br />
          <em>{part.description}</em> <br />
          <em>{part.backgroundMaterial}</em>
        </p>
      )
    default:
      return assertNever(part)
  }
}
