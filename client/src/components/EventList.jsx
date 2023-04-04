import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom";
function EventList() {

    const [events, SetEvents] = useState([])

    const callEvent = () => {
        axios.get('http://localhost:18102/api/event')
            .then(function (response) {
                // handle success
                console.log(response);
                SetEvents(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        callEvent()
        return () => {
            console.log('lefutott')
        }
    }, [])

// TODO: Fixing Dynamic Routing
    return (
        <>
            <div>
                <BrowserRouter>
                    {events.map(event => (<Link to={'events/' + event.id} />))}
                    <Route path="heroes/:id" component={Event} />
                </BrowserRouter>
            </div>
        </>
    );
}

export default EventList;