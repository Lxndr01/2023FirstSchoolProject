import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import MoreInfo from './MoreInfo';
function Event({events}) {
    console.log(events)
    const { id } = useParams()
    const [event, setevent] = useState([])
    const [selected, setselected] = useState()
   
    

    useEffect(() => {
        setevent(events)
        event.forEach(element => {
            if(element === id){
                setevent(element)
            }
       console.log(event)
    }, [])})

    
        return (
             <>
                <div>
                    {id}
                </div>
                <div>
                </div>
             </>
        )
    
}

export default Event;