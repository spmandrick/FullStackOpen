const Header = (crs) =>{
  return (
    <div>
      <h1>{crs.name}</h1>
    </div>
  )
}

const Content = (parts) => {
  console.log(parts.parts[0])
  return (
    <div>
      <Part part = {parts.parts[0].name} exercises = {parts.parts[0].exercises} />
      <Part part = {parts.parts[1].name} exercises = {parts.parts[1].exercises} />
      <Part part = {parts.parts[2].name} exercises = {parts.parts[2].exercises} />
    </div>
  )
}

const Part = (prt) => {
  return (
    <div>
      <p>{prt.part} {prt.exercises}</p>
    </div>
  )
}

const Total = (tot) => {
  return (
    <div>
      <p>Number of exercises {tot.total[0].exercises + tot.total[1].exercises + tot.total[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App