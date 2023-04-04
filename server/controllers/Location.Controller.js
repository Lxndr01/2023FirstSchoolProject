const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = (app, jsonParser) => {

    app.get('/api/location', jsonParser, async (req, res) => {
        try {
            const locations = await prisma.location.findMany()
        res.status(200).json(locations)
        }
        catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

    app.post('/api/location', jsonParser, async (req, res) => {
        try {
            const location = await prisma.location.create({
                data: {
                    name: req.body.name,
                    latitude: parseFloat(req.body.latitude),
                    longitude: parseFloat(req.body.longitude)
                }
            })
            res.status(201).json({ 'message': 'Successful create' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

    app.put('/api/location', jsonParser, async (req, res) => {
        try {
            const location = await prisma.location.update({
                where:{
                    id: req.body.id
                },
                data: {
                    name: req.body.name,
                    latitude: parseFloat(req.body.latitude),
                    longitude: parseFloat(req.body.longitude)
                }
            })
            res.status(200).json({ 'message': 'Successful update' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })


    app.delete('/api/location', jsonParser, async (req, res) => {
        try {
            const location = await prisma.location.delete({
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