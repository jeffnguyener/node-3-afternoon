require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log('database set!')
    })
    .catch(err => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Cruising on port ${SERVER_PORT}`))