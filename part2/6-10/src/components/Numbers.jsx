const Numbers = ({persons, filter}) => {
  const filtered_persons = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))

  return (
    <>
      {filtered_persons.map(person => <div> {person.name} {person.number} </div>) }
    </>
  )
}

export default Numbers