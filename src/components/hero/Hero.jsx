import React from 'react'
import './hero.css';
import hii from '../../assets/hii.png';
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero">
         <div className='hero-text'>
        <img src={hii} alt="" />
        <div className="hero-name">
            <p>Hi, I'm</p>
            <h1>Amit</h1>
        </div>
    
    </div>
    </div> 
    </div>
   
   
  )
}

export default Hero;