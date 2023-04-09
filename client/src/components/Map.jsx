import React, { Component, useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, InfoBox } from '@react-google-maps/api'
import './hello.css'
import axios from 'axios'
import NavbarMenu from './NavBar'
import markerImage from '../assets/marker.png'

//AIzaSyCjr0Er26-gT8HT8XI2x-Ix7uFMG7casuA
export default function Map({ lat, lng }) {
    const [selected, setselected] = useState(null)

    const [events, SetEvents] = useState(null)

    const callEvent = async () => {
        await axios.get('http://localhost:18102/api/event')
            .then(function (response) {
                // handle success
                SetEvents(response.data)
                console.log(events)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        callEvent()

    }, [])


    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyCjr0Er26-gT8HT8XI2x-Ix7uFMG7casuA" })


    if (!isLoaded) return <>Still Loading...</>
    return (
        <>
            <GoogleMap zoom={3} center={{ lat: lat, lng: lng }} clickableIcons={false} mapContainerClassName='map-container'>
                {events ? events.map((event) => { return (<Marker animation={2} title={event.name} key={event.id} draggable={false} position={{ lat: event.location.latitude, lng: event.location.longitude }} onClick={() => setselected(event)} />) }) : null}
                {selected ? <InfoWindow position={{ lat: selected.location.latitude, lng: selected.location.longitude }} onCloseClick={() => setselected(null)}>
                    <div>
                        <p>Event name: <b>{selected.name}</b></p>
                        <p>Event description: <b>{selected.description}</b></p>
                        <p>Event date: <b>{selected.date}</b></p>
                        <p>Event time: <b>{selected.time}</b></p>
                        <p>For more info click on this <a href={'/event/' + selected.id}>link.</a></p>
                    </div>
                </InfoWindow> : null}
            </GoogleMap>
        </>
    );
}