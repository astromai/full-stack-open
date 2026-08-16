const Header = (c) => {
  return (
    <div>
      <h1>{c.course}</h1>
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
  return (
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>Total of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const obj = [
    {title: 'Fundamentals of React', exercises: 10},
    {title: 'Using props to pass data', exercises: 7},
    {title: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={obj} />
      <Total parts={obj}/>
    </div>
  )
}

export default App