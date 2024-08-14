import React from 'react'
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Certifications from '../certifications/Certifications'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contact/>
    </div>
  )
}

export default Home