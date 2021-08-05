import React from 'react'
import Navigation from '../Navigation'

export default () => (
    <header 
        key='header'
        style={{
            borderBottom: '1px solid #cecece'
        }}
    >
    <h2>Asyn component in react</h2>
    <p>Some words</p>
    <Navigation key='navigation' />
    
    </header>
)

