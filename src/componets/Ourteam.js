import React from 'react'
import "../CSS/ourteam.css"
import Team from '../assets/team.jpg'

export default function Ourteam(){ 
    return( 
        <div className = "skinny-container"> 
            <div className = "our-team-container">
                
                    <img src ={Team} alt = "team" className = "image"></img>
                    <h2 className = "our-team-header">Our Team</h2>
                    <p className = 'text-with-padding'>Dev Lab Design is veteran owned and operated, we specialize in getting businesses online. Our team comes from varying backgrounds and careers bringing new perspectives to each project. Travis Racisz the CEO was a cyber security analyst for the Air Force and the Army and full stack web developer before starting Dev Lab Designs. Partnered with his sister. Jacquelyn Racisz, brought endless value to one of the most historic museums in America, running the daily operations of the Henry Ford museum.</p>
                    <br></br>

                    <p className = 'text-with-padding'>Our team is always growing.</p>
                    
           
            </div>
        </div>
    )
}