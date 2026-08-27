import { Part } from "./Part"

export const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => 
        <Part
          key={p.id} 
          name={p.name} 
          exercises={p.exercises}/>)}
    </div>
  )
}