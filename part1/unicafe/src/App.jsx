const Header = (course) => {
  return(
    <nav>
      <h1>{course.name}</h1>
    </nav>
  )
}

const Content = (course) => {
  return(
    <section>
      <p>{course.part} {course.exercises}</p>
    </section>
  )
}

const Total = (course) => {
  return(
    <div>
      <p>Number of exercises {course.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>

      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App