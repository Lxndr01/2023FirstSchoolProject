import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Card, CardBody, CardFooter, CardHeader, Link, useDisclosure } from '@chakra-ui/react';
import React, { Component, useRef, } from 'react'
import EventButton from './EventButton';
import './hello.css'
function AllEvent({ events }) {

    return (<>
        {events ? events.map(event => {
            return (
                <Card key={event.id}>
                    <CardHeader>
                        {event.name}
                    </CardHeader>
                    <CardFooter>
                    <EventButton name={'Esemény előnézete'} id={event.id} header={event.name} eventdescription={event.description} eventdate={event.date} eventname={event.name} eventtime={event.time} buttonLeft={'Vissza'} buttonRight={'Megnézés'} />
                    </CardFooter>
                </Card>
            )
        }) : <div className='notFound'>Nincs elérhető esemény</div>}
        
    </>);
}

export default AllEvent;