import React from 'react'
import './project.css'
import quote from '../../assets/quote.png'
const Projects = () => {

  const cardData = [
    { title: 'Card 1',link: "https://www.google.com"},
    { title: 'Card 2',link: "https://www.google.com" },
    { title: 'Card 3', link: "https://www.google.com" },
    { title: 'Card 4',link: "https://www.google.com" },
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
            <a href={data.link} key={index} className="project">
              <div className="project-img">
                <img src={quote} alt="" />
              </div>
              
               <h2>{data.title}</h2> 
            </a>
                    
      ))}
         
       
           </div>
    </div>
  )
}

export default Projects