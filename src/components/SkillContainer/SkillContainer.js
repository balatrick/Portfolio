import React from 'react'
import { Element } from 'react-scroll'
import skillImg from '../../assets/images/tech-quote.jpg'
import LinearProgress from '@mui/joy/LinearProgress';
import "./SkillContainer.css"


const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skill">

    <div className='skillContainer__image'>
    <img src={skillImg} alt='' />

    </div>
    <div className='skillContainer__text'>
    <h1>Skill Set</h1>
    <div className='skillContainer__skillset'>
        <h5>React</h5>
        <div className='skillContainer__slider skillContainer__slider1'>
        <LinearProgress determinate value={50} />

        </div>
       
    </div>
    <div className='skillContainer__skillset'>
        <h5>Javascript</h5>
        <div className='skillContainer__slider skillContainer__slider2'>
        <LinearProgress determinate value={75} />

        </div>
       
    </div>
    <div className='skillContainer__skillset'>
        <h5>Jquery</h5>
        <div className='skillContainer__slider skillContainer__slider3'>
        <LinearProgress determinate value={80} />

        </div>
       
    </div>
    <div className='skillContainer__skillset'>
        <h5>Bootstrap 5</h5>
        <div className='skillContainer__slider skillContainer__slider4'>
        <LinearProgress determinate value={90} />

        </div>
       
    </div>
    <div className='skillContainer__skillset'>
        <h5>Drupal</h5>
        <div className='skillContainer__slider skillContainer__slider5'>
        <LinearProgress determinate value={90} />

        </div>
       
    </div>
    </div>

    </Element>
  )
}

export default SkillContainer
