import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import EventList from './components/EventList'
import Map from './components/Map'
import Router from './components/Router'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <Router />
    </ChakraProvider>
)
