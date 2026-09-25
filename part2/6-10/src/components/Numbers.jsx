const Numbers = ({persons, filter, delContact}) => {
  const filtered_persons = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))

  return (
    <>
      {filtered_persons.map(person => 
        <form key = {person.id}> 
          {person.name} {person.number}
          <div><button type="button" onClick={() => delContact(person.id)}>Delete</button></div>
        </form>) }
    </>
  )
}

export default Numbers