import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Layout from './components/social/Layout'

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </Layout>
    </>
  )
}

export default App