import { useState, useEffect } from 'react'
import axios from 'axios'
import ContactForm from './components/ContactForm'
import Numbers from './components/Numbers'
import Filter from './components/Filter'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise fulfilled')
        setPersons(response.data) 
      })
  }, [])
  console.log('render', persons.length, 'contacts')

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObj = { name: newName, number: newNumber }
    const names = persons.map(person => person.name)
    if (names.indexOf(newName) === -1) {
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filter} onChange={handleFilterChange}/>

      <h2>Add a new contact</h2>
      <ContactForm name={newName} number={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} click={addName} />

      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App