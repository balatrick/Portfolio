import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './Topcontainer.css'

const Topcontainer = () => {
  return (
    <div>
      <Element name="about" className="Topcontainer">
        <TopContent/>
      </Element>
    </div>
  )
}

export default Topcontainer
