import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom";
import Map from './Map';
import Router from './Router';
function EventList() {

    const [events, SetEvents] = useState(null)

    const callEvent = async () => {
        await axios.get('http://localhost:18102/api/event')
            .then(function (response) {
                // handle success
                SetEvents(response.data)
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
    {events ? <Map lat={10} lng={10} events={events} /> : null}
    </>
)
}

export default EventList;