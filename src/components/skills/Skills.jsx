import React from 'react'
import './skills.css'
import html from '../../assets/html-logo.png'
const Skills = () => {
  return (
    <div className='skill-section'>
<div className="skill-text">
  <h1>My Awesome Skills & Experience</h1>
  <p>My skills are wideranging, spanning across multiple creative and technical disciplines. I absorb information like a sponge and I'm in <br /> constant pursuit of skills that can help develop me into a well rounded professional.</p>
</div>
<div className="skills-icon-section">
  <div className="skill-icons">
     <img src={html} alt="" />
  </div>
  <div className="skill-icons">
     <img src={html} alt="" />
  </div>
 
</div>
    </div>
  )
}

export default Skills