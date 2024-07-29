import React from 'react'
import './contact.css'
import gmail from '../../assets/gmail.svg'
import messenger from '../../assets/messenger.svg'
const Contact = () => {
  return (
    <div className='contact-section'>
      <div className="contact-text">
        <h1> <span>Connect</span> with me</h1>
      </div>
      <div className="messenger">
          <div className="gmail">
            <img src={gmail} alt="" />
            <p>amitkumar696945@gmail.com</p>
          </div>
          <div className="gmail">
            <img src={messenger} alt="" />
            <p>amitkumar696945@gmail.com</p>
          </div>
      </div>
      <div className="input">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Your Email' />
      <textarea name="" id="" placeholder='Your Message'></textarea>
      <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact