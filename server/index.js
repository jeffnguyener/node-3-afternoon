require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()
const cont = require('./controller')

app.use(express.json())

app.post('/api/products', cont.create)
app.get('/api/products/:id', cont.getOne)
app.get('/api/products', cont.getAll)
app.put('/api/products/:id', cont.update)
app.delete('/api/products/:id', cont.delete)

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('database set!')
    })
    .catch(err => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Cruising on port ${SERVER_PORT}`))