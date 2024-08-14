import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Layout from './components/social/Layout';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
