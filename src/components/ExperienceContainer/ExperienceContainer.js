import React from 'react'
import {Element} from "react-scroll"
import ExperienceBox from "../ExperienceBox/ExperienceBox"
import "./ExperienceContainer.css"


const ExperienceContainer = () => {
  return (
    <Element className="ExperienceContainer" id="exp">
     <h1>Experience</h1>
     <div className='ExperienceContainer__info'>
     <ExperienceBox number="+5" title="clients"/>
     <ExperienceBox number="+3" title="Years of exp" style={{backgroundColor: "#f64c08"}}/>
     <ExperienceBox number="+10" title="Projects"/>
     
     </div>
    </Element>
  )
}

export default ExperienceContainer
