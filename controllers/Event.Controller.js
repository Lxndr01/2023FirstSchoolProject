const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = (app, jsonParser) => {

app.get('/api/events', jsonParser, (req, res) => {
    res.status(200).send("hello")
})

}