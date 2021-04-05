import React from 'react'
import "../CSS/services.css"

export default function Services(){ 
    return(
        <div className = "skinny-container"> 

            <div className = "services-container">
                <div className = "services-text-with-padding"> 
                        <h2>Services</h2>
                        <grid className = 'grid'>

                    
                        <div> 
                            <h3 className = 'service-title'>Web Site Design</h3>
                            <p>Modern day, accessible deigns available for any type of business. Our designs capture the essence of what your company is.</p>
                        </div>

                        <div> 
                            <h3 className = 'service-title'>Web Site Development</h3> 
                            <p>We will build you the website that you dreamed of having. We make custom websites for all of our customers needs, be it a landing page to a shop. We guarantee a unique experience</p>
                        </div>

                        <div> 
                            <h3 id = "contact" className = 'service-title'>Web Presence Management</h3>
                            <p>After the site is created and hosted we will continue to manage it for you. Any changes that need to be made from new pictures added to new content will be done for no extra charge</p>
                        </div>
                    
                        <button  className = "learn-more-button">Learn More</button>
                    </grid>
                </div>
            </div>
        </div>
    )
}