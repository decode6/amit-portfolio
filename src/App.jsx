import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Skills/>

    </>
  )
}

export default App