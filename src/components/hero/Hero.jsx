import React from 'react'
import './hero.css';
import withSocialIcons from '../social/withSocialIcons';
import hii from '../../assets/hii.png';
import hero_image from '../../assets/hero-img.png';
import Sidebar from '../social/Sidebar';
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
          <div className="header-role">
            <h1>Software Engineer</h1>
            <p>Full Stack Developer</p>
          </div>

        </div>
        <div className="hero-img">
          <img src={hero_image} alt="" />
        </div>
      </div>
      <Sidebar/>
    </div>


  )
}

export default Hero;