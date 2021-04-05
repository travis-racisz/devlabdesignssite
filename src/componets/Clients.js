import React from 'react'
import "../CSS/clients.css"
import angels from '../assets/angels.PNG'
import Petesmeals from '../assets/petesmeals.PNG'
export default function Clients(){ 
    return(
        <div className = "clients-container"> 
            <h2 className = "meet-our-clients-title">Meet our Clients</h2>
            <div className = "project-container"> 
                <img src = {angels} alt = "angels beauty and barbershop" className = "angels-image"></img>
                <h3 className = 'project-title'>Angels Beauty and Barbershop</h3>
                <p className = 'project-text'>A barbershop dedicated to giving quality ethnic haircuts in Tokyo Japan</p>
            </div>
            <div className = 'project-container'> 
                <img className = "petes-image" src = {Petesmeals} alt = "petes meals"></img>
                <h3 className = 'project-title'>Petes Meals</h3>
                <p className = 'project-text'>A meal prepping service that lets the customer choose between different meal plans to get ready made meals delivered to their doors. </p>
            </div>
        </div>
    )
}