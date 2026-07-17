import { useState, useEffect } from 'react'
import axios from 'axios'
//import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  return(
    <div>
    {notes.map(note => note.content+"\n")}
    </div>
  )
}
export default App