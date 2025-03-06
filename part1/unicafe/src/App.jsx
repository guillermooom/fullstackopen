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

const Content = (course) => {
  return (
    <section>
      <Part name={course.part1} exercises={course.exercises1} />
      <Part name={course.part2} exercises={course.exercises2} />
      <Part name={course.part3} exercises={course.exercises3} />
    </section>
  )
}

const Total = (course) => {
  return (
    <div>
      <p>Number of exercises {course.total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header name={course.name} />
      <Content {...course} />
      <Total total={course.exercises1 + course.exercises2 + course.exercises3} />
    </div>
  )
}

export default App
