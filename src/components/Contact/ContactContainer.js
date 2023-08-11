import { IconButton } from '@mui/material'
import React from 'react'
import {Element} from "react-scroll"
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import "./ContactContainer.css"

const ContactContainer = () => {
  return (
    <Element className="contact" id="Contact">
        
    <h1>Contact</h1>
    <div className='contact__container'>
    <p>
        Email: <span>Bala3151994@gmail.com</span>
    </p>
    <p>Githup Username: <span>https://github.com/balatrick</span></p>

    <div className='contact__icons'>
        <a href='google.com'>
            <IconButton>
                <LinkedIn/>
            </IconButton>
        </a>
        <a href='google.com'>
            <IconButton>
                
                <Facebook/>
                
            </IconButton>
        </a>
        <a href='google.com'>
            <IconButton>
                
                <Instagram/>
            </IconButton>
        </a>
    </div>
    </div>
    
    </Element>
  )
}

export default ContactContainer
