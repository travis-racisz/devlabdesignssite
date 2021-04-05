import React from 'react'
import '../CSS/header.css'
import Logo from "../Logo"
export default function Header(){ 
    return( 
        <div className = "header-container">
            <a className = "company-name" href = "/">Dev Lab Designs</a>
            <Logo />
        </div> 
    )
}