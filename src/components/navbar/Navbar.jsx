import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <h1 className='logo-icon'>Amit</h1>
      
       
        <ul> 
          <li>Home</li>
        <li><Link to="/hero">Hero</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    
      <div></div>
    </nav>
  )
}

export default Navbar