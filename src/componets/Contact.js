import React from 'react'
import "../CSS/contact.css"
export default function Contact(){ 
    return(
        <div  className = 'skinny-container'> 
            <div className = "contact-container"> 

                <h2  className ="contact">Contact</h2>
                <a href = "mailto:travis@devlabdesigns.io">Travis@devlabdesigns.io</a>
                <p className = "phone-number">+1 939 200 9954</p>
            </div>
        </div>
    )
}