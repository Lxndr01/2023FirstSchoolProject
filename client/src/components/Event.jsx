import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import './hello.css'
import { Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import moment from 'moment';

function Event() {
    const { id } = useParams()
    const [events, setEvents] = useState(null)
    const [selected, setselected] = useState(null)

    var date;

    useEffect(() => {
        const callEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:18102/api/event/${id}`);
                setEvents(response.data.event);
            } catch (error) {
                console.log(error);
            }
        };
        callEvent();
    }, [id])

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyCjr0Er26-gT8HT8XI2x-Ix7uFMG7casuA" })

    return (
        <div>
            {events ? (
                <><SimpleGrid columns={1} spacing={100}>
                    <Box width={{
                        base: '500px',
                        md: '500px',
                        xl: '700px',
                        sm: '200px',
                        xs: '200px'
                    }}
                        height={20}>
                        <Card>
                            <CardHeader>
                                <div><b>{events.name}</b></div>
                                <div><sub>id: {events.id}</sub></div>
                            </CardHeader>
                            <CardBody>
                                <div>{events.description}</div>
                                <div>{moment(events.date).format('YYYY-MM-DD HH:MM')}</div>
                            </CardBody>
                            <CardFooter>
                                <div>{events.organizer.name}</div>
                                <br />
                                <div><sub>{events.organizer.phone}</sub></div>
                                <br />
                                <div><sub>{events.organizer.email}</sub></div>
                                <br />
                                <div>{events.location.name}</div>
                            </CardFooter>
                        </Card>
                    </Box>
                    <Box width={{
                        base: '500px',
                        md: '500px',
                        xl: '700px',
                        sm: '200px',
                        xs: '200px'
                    }}
                        height={'300px'}>
                        {isLoaded ? <GoogleMap zoom={10} center={{ lat: events.location.latitude, lng: events.location.longitude }} clickableIcons={false} mapContainerClassName='minimap-container'>
                            <Marker key={events.id} position={{ lat: events.location.latitude, lng: events.location.longitude }} onClick={() => setselected(events)} />
                            {selected ? <InfoWindow position={{ lat: selected.location.latitude, lng: selected.location.longitude }} onCloseClick={() => setselected(null)}>
                                <div>
                                    <p>Event name: <b>{selected.name}</b></p>
                                    <p>Event description: <b>{selected.description}</b></p>
                                    <p>Event date: <b>{selected.date}</b></p>
                                    <p>Event time: <b>{selected.time}</b></p>
                                    <p>For more info click on this <a href={'/event/' + selected.id}>link.</a></p>
                                </div>
                            </InfoWindow> : null}
                        </GoogleMap> : 'Google Maps betöltése'}
                    </Box>
                </SimpleGrid>

                </>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    );
}

export default Event;