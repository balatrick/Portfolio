import React from 'react'
import {Link} from 'react-scroll';
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontent__container'>
        <h1>Mr. Balasubramaniyan Annadurai</h1>
        <h4>Passionate About Creating Functional And Responsive Websites</h4>
        <a href='www.google.com'><button className='topcontent__downloadbutton'>Download My CV.</button></a>
        <Link to="project" smooth="true" duration={500}>
            <button className='topcontent__workbutton'>My work</button>
        </Link>
       </div>      
    </div>
  )
}

export default TopContent
