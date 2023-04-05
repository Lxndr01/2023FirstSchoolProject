const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const moment = require('moment')

module.exports = (app, jsonParser) => {

    app.get('/api/event', jsonParser, async (req, res) => {
        try {
            const events = await prisma.event.findMany({
                include: {
                    location: true,
                    organizer: true
                }
            })
            res.status(200).json(events)
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

    app.get('/api/event/:id', jsonParser, async (req, res) => {
        try {
            const event = await prisma.event.findFirst({
                where: {
                    id: req.params.id
                },
                include: {
                    location: true,
                    organizer: true
                }
            })
            res.status(200).json({event})
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

    app.post('/api/event', jsonParser, async (req, res) => {
        try {
            const event = await prisma.event.create({
                data: {
                    name: req.body.name,
                    date: req.body.date,
                    time: req.body.time,
                    description: req.body.description,
                    location: {
                        connect: {
                            id: req.body.locationId
                        }
                    },
                    organizer: {
                        connect: {
                            id: req.body.organizerId
                        }
                    }
                }
            })
            res.status(201).json({ 'message': 'Successful create' })
        } catch (e) {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })


    app.put('/api/event', jsonParser, async (req, res) => {
        try {
            const event = await prisma.event.update({
                where: {
                    id: req.body.id
                },
                data: {
                    name: req.body.name,
                    date: req.body.date,
                    time: req.body.time,
                    description: req.body.description,
                    location: {
                        connect: {
                            id: req.body.locationId
                        }
                    },
                    organizer: {
                        connect: {
                            id: req.body.organizerId
                        }
                    }
                }

            })
            res.status(200).json({ 'message': 'Successful update' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })


    app.delete('/api/event', jsonParser, async (req, res) => {
        try {
            const event = await prisma.event.delete({
                where: {
                    id: req.body.id
                }
            })
            res.status(200).json({ 'message': 'Successful delete' })
        } catch {
            res.status(500).json({ 'message': 'There was an error with the request!' })
        }
    })

}