import React, {useState} from 'react'
import "./Project.css"


const Project = ({img, desc, title, link}) => {

const [show, setShow] = useState(false);

  return (
    
      <a href={link}>
        <div className='Project'
         onMouseEnter={()=> setShow(true)}
         onMouseLeave={()=> setShow(false)}
         >
          {
            show ? (
              <div className='project__content'><h4>{title}</h4>
              <p>{desc}</p>
              </div>
            ) : (
              <img alt="newfileimg" src={img}></img>
            )
          }
        </div>
      </a>
    
  )
}

export default Project
