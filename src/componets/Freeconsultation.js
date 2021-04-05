import React from 'react'
import '../CSS/freeconsultation.css'


export default function Freeconsultation(){ 
  
    return( 
        <div className = "skinny-container">
            <div className = "free-consultation-container"> 
                <div className = "gradient-background-consultation"> 
                    <h2 className = "schedule-consultation">Schedule a free consultation</h2>
                    <a href = '#contact' className = "contact-button">Contact Us</a>
                </div>
            </div>
        </div>
    )
}