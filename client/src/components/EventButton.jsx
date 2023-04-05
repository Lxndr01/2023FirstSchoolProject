import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Link, useDisclosure } from '@chakra-ui/react';
import React, { Component, useRef } from 'react'
function EventButton({ name, header, eventname, eventdate, eventtime, eventdescription, buttonLeft, buttonRight, id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    
    return (
        <>
            <Button onClick={onOpen}>{name}</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>{header}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        {eventname}
                        <br></br>
                        {eventdate}
                        <br></br>
                        {eventtime}
                        <br></br>
                        {eventdescription}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            {buttonLeft}
                        </Button>
                        <Link href={'/event/'+id}>
                            <Button colorScheme='red' ml={3}>
                                {buttonRight}
                            </Button>
                        </Link>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default EventButton;