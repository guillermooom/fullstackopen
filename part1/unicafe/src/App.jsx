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

const Content = ({course}) => {
  return (
    <section>
      {course.map(cour => 
        <Part name={cour.name} exercises={cour.exercises} />
      )}
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content course={[part1,part2,part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
