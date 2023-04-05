import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import MoreInfo from './MoreInfo';
function Event() {
    const { id } = useParams()
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