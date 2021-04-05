import React from 'react'
import Freeconsultation from './Freeconsultation'
import Header from './Header'
import Ourteam from './Ourteam'
import Topbanner from './Topbanner'
import Services from './Services.js'
import Contact from './Contact'
import Clients from './Clients'

export default function Homepage(){ 
    return( 
        <div>
            <Header />
            <Topbanner />
            <Ourteam />
            <Freeconsultation />
            <Services />
            <Contact />
            <Clients />

        </div> 
    )
}