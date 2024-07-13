import React from 'react'
import './project.css'
const Projects = () => {

  const cardData = [
    { title: 'Card 1', description: 'This is the description for card 1.' },
    { title: 'Card 2', description: 'This is the description for card 2.' },
    { title: 'Card 3', description: 'This is the description for card 3.',link: "www.google.com" },
  ];



  return (
    <div className='project-section'>
           <div className="project-text">
            <h1>My Creative Projects Section</h1>
           </div>
           <div className="project-category">
            <ul>
              <li>All</li>
              <li>Full-Stack</li>
              <li>React</li>
              <li>Mern-Stack</li>
              <li>Python</li>
              <li>HTML&CSS</li>
              <li>JavaScript</li>
            </ul>
           </div>
           <div className="project-card">
       
    {cardData.map((data, index) => (
            <div className="project">
              key={index} {data.title} description={data.description} 
            </div>
         
      ))}
         
       
           </div>
    </div>
  )
}

export default Projects