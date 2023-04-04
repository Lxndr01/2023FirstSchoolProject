const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = express()

dotenv.config()

const port = process.env.PORT

require('./controllers/Location.Controller')(app, jsonParser)
require('./controllers/Organizer.Controller')(app, jsonParser)
require('./controllers/Event.Controller')(app, jsonParser)

app.listen(port, () => {
    console.log('The server has started on port '+port)
})
