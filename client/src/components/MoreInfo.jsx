import React, { Component } from 'react'
function MoreInfo({event}) {
    
    console.log(event)
    
    return (<>
        <p>{event}</p>
    </>);
}

export default MoreInfo;