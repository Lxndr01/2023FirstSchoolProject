import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


const localizer = momentLocalizer(moment)

function Calend() {
    return (<>
        <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}>
        </Calendar>
    </>);
}

export default Calend;