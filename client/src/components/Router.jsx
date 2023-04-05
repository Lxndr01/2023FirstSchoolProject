import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Event from './Event';
import EventList from './EventList';
import axios from 'axios';
import AllEvent from './AllEvent';
import NavbarMenu from './NavBar';
function Router() {

    const [events, SetEvents] = useState(null)

    const callEvent = async () => {
        await axios.get('http://localhost:18102/api/event')
            .then(function (response) {
                // handle success
                SetEvents(response.data)
                localStorage.setItem('events', JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        callEvent()

    }, [])

    return (
        <>
            <NavbarMenu />
            <BrowserRouter>
            {events ? events.map(event => { return (<Link key={event.id} to={'/event/' + event.id} />) }) : null}
            <Routes>
                <Route path='/' element={<AllEvent events={events} />}></Route>
                <Route path='/map' element={<EventList />}></Route>
                <Route path='/event/:id' element={<Event />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;