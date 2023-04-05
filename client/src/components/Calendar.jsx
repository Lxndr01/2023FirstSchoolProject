import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CalendarHomeMade() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const callEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:18102/api/event`);
                const events = response.data.map(element => ({
                    id: element.id,
                    title: element.name,
                    start: new Date(element.date),
                    allDay:  true,
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
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
            />
        </div>
    )
}