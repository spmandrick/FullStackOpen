import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import ContactServices from './components/ContactServices'

const baseUrl = 'http://localhost:3001/api/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    ContactServices
    .GetContacts(baseUrl).then(response => {
        console.log('Promise fulfilled')
        setPersons(response.data) })
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
      ContactServices
        .PostContact(baseUrl, nameObj)
        .then(response => nameObj.id = response.data.id)  // Need to wait for promise to be fulfilled to get the response data and tell us what is the id that the server gave this object, then we save this id to the contact that is add to the persons in state
      console.log(nameObj)
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const delContact = (id) => {
    const urlwid = baseUrl+`/${id}`
    console.log(urlwid)
    ContactServices
      .DeleteContact(urlwid)
      .then(response => setPersons(persons.filter(person => person.id !== id)))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filter} onChange={handleFilterChange}/>

      <h2>Add a new contact</h2>
      <ContactForm name={newName} number={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange} click={addName} />

      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter} delContact={delContact}/>
    </div>
  )
}

export default App