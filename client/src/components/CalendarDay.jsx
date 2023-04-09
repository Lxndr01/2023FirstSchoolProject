import { Card, CardFooter, CardHeader } from '@chakra-ui/react';
import axios from 'axios';
import moment from 'moment';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import EventButton from './EventButton';

function CalendarDay() {
    const { day } = useParams();
    const [events, setEvents] = useState([]);
  
    const callEvent = () => {
      axios
        .get(`http://localhost:18102/api/event/day/${day}`)
        .then(function (response) {
          console.log(response);
          setEvents(response.data.dayEvents);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    useEffect(() => {
      callEvent();
    }, []);
  
    return (
      <>
        {Array.isArray(events) && events.length ? (
          events.map((event) => (
            <Card key={event.id}>
              <CardHeader>{event.name}</CardHeader>
              <CardFooter>
                <EventButton
                  name={'Esemény előnézete'}
                  id={event.id}
                  header={event.name}
                  eventdescription={event.description}
                  eventdate={event.date}
                  eventname={event.name}
                  eventtime={event.time}
                  buttonLeft={'Vissza'}
                  buttonRight={'Megnézés'}
                />
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="notFound">Nincs elérhető esemény</div>
        )}
      </>
    );
  }
  
  export default CalendarDay;