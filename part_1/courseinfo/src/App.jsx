const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div>
      <p> {part.title} - {part.exercises}</p>
    </div>
  )
} 

const Content = ({ parts }) => {
  const list = parts.parts
  return (
    <div>
      <Part part={list[0]}/>
      <Part part={list[1]}/>
      <Part part={list[2]}/>
    </div>
  )
}

const Total = ({ parts }) => {
  const list = parts.parts
  return (
    <div>
      <p>Total of exercises: {list[0].exercises + list[1].exercises + list[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {title: 'Fundamentals of React', exercises: 10},
      {title: 'Using props to pass data', exercises: 7},
      {title: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course}/>
    </div>
  )
}

export default App