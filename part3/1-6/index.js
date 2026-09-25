const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

notes = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Sup!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(notes)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

function generateRandomId(length = 8) {
    if (typeof length !== 'number' || length <= 0) {
        throw new Error('Length must be a positive number');
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
    }

    return id;
}

app.post('/api/persons', (request, response) => {
    const note = request.body

    if (!note.name || note.name == ""){
        return response.status(400).json({
            error: "Name is missing"
        })
    }
    if (!note.number || note.number == ""){
        return response.status(400).json({
            error: "Number is missing"
        })
    }
    if (notes.find(curNote => curNote.name == note.name)) {
        return response.status(400).json({
            error: "Name already exists in phone book"
        })
    }

    note.id = generateRandomId()
    notes = notes.concat(note)

    response.json(note)
})

app.get('/info', (request, response) => {
    infoString = `<p>Phonebook has info for ${notes.length} people</p>`
    const timeStamp = Date.now()
    const dateObj = new Date(timeStamp)
    const formattedDate = dateObj.toLocaleString('en-US', {
        weekday: 'long',    // e.g., "Monday"
        year: 'numeric',    // e.g., "2026"
        month: 'long',      // e.g., "September"
        day: 'numeric',     // e.g., "23"
        hour: '2-digit',    // e.g., "09"
        minute: '2-digit',  // e.g., "05"
        second: '2-digit',  // e.g., "07"
        hour12: true        // 12-hour format with AM/PM
    });
    console.log(formattedDate)
    infoString = infoString + `<p>${formattedDate}</p>`
    response.send(infoString)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})