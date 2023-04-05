import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Card, CardBody, CardFooter, CardHeader, Link, useDisclosure } from '@chakra-ui/react';
import React, { Component, useRef, } from 'react'
import EventButton from './EventButton';
function AllEvent({ events }) {


    console.log(events)

    return (<>
        {events ? events.map(event => {
            return (
                <Card key={event.id}>
                    <CardHeader>
                        {event.name}
                    </CardHeader>
                    <CardFooter>
                    <EventButton name={'Esemény előnézet'} id={event.id} header={event.name} eventdescription={event.description} eventdate={event.date} eventname={event.name} eventtime={event.time} buttonLeft={'igen'} buttonRight={'igen'} />
                    </CardFooter>
                </Card>
            )
        }) : <div>Nincs elérhető esemény</div>}
        
    </>);
}

export default AllEvent;