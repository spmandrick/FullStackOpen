const Header = (crs) =>{
  return (
    <div>
      <h2>{crs.name}</h2>
    </div>
  )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => 
                <p key = {part.id}>{part.name} {part.exercises}</p>
                )
            }
        </div>
    )
}

const Total = ({parts, prototype}) => {
    const total = parts.reduce((sum, current) => sum += current.exercises, 0)
    return (
        <div>
            <b>Total of {total} exercises</b>
        </div>
    )
}

const Course = ({course, prototype}) => {
    
    return (
        <>
            <Header name={course.name}></Header>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course