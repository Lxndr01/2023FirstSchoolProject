import React, { Component } from 'react';
import { useEffect, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, useDisclosure } from '@chakra-ui/react';
import EventButton from './EventButton';
import './hello.css'
import moment from 'moment';
import { useNavigate } from 'react-router';

export default function CalendarHomeMade() {

    let navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [isPop, SetIsPop] = useState(false);

    const onClick = (e) => {
        SetIsPop(true)
        let path = '/calendar/day/' + moment(e.dateStr).format('YYYY-MM-DD')
        navigate(path) 
    }

    useEffect(() => {
        const callEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:18102/api/event`);
                const events = response.data.map(element => ({
                    id: element.id,
                    title: element.name,
                    start: new Date(element.date),
                    allDay: true,
                }));
                setEvents(events)
            } catch (error) {
                console.log(error);
            }
        };
        callEvent();
    }, []);

    return (
        <div>
            <h1>Calendar</h1>
            <Box height={{
                md: '300px',
                xl: '500px',
                sm: '200px'
            }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView='dayGridMonth'
                    weekends={true}
                    events={events}
                    height={'1000px'}
                    dateClick={onClick}
                />
            </Box>
        </div>
    )
}