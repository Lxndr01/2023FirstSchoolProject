const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = (app, jsonParser) => {

    app.get('/api/organizer', jsonParser, async (req, res) => {
        const organizers = await prisma.organizer.findMany()
        res.status(200).json(organizers)
    })

    app.post('/api/organizer', jsonParser, async (req, res) => {
        try {
            const organizer = await prisma.organizer.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                }
            })
            res.status(200).json({ 'message': 'Successful creation' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

    app.put('/api/organizer', jsonParser, async (req, res) => {
        try {
            const organizer = await prisma.organizer.update({
                where:{
                    id: req.body.id
                },
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                }
            })
            res.status(200).json({ 'message': 'Successful update' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })


    app.delete('/api/organizer', jsonParser, async (req, res) => {
        try {
            const organizer = await prisma.organizer.delete({
                where:{
                    id: req.body.id
                }
            })
            res.status(200).json({ 'message': 'Successful delete' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })


}