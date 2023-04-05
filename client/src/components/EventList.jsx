import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom";
import Map from './Map';
function EventList() {

    const [events, SetEvents] = useState(null)

    const callEvent = async () => {
        await axios.get('http://localhost:18102/api/event')
            .then(function (response) {
                // handle success
                console.log(response.data);
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

// TODO: Fixing Dynamic Routing
return (
    <>
    {events ? <Map lat={10} lng={10} events={events} /> : null}
    </>
)
}

export default EventList;