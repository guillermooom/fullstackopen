const Header = (course) => {
  return (
    <nav>
      <h1>{course.name}</h1>
    </nav>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <section>
      {parts.map(part => 
        <Part name={part.name} exercises={part.exercises} />
      )}
    </section>
  )
}

const Total = ({parts}) => {
  var exer = 0;
  {parts.map( part =>
    exer+=part.exercises
    )}
  return (
    <div>
      <p>Number of exercises {exer}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
