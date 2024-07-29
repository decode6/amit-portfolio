import React from 'react'
import './contact.css'
import gmail from '../../assets/gmail.svg'
const Contact = () => {
  return (
    <div className='contact-section'>
      <div className="contact-text">
        <h1>Connect with me</h1>
      </div>
      <div className="messenger">
          <div className="gmail">
            <img src={gmail} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Contact