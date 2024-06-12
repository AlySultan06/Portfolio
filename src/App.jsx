/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

//Components
import Header from './Components/Header'
import Landing from './Components/Landing'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certificates from './Components/Certificates'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import { useRef } from 'react'

function App() {

  const services = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const certificates = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior:'smooth' });
  }


  return (
    <>
<Header scrollFunc={scrollToSection} refs={[services, skills, projects, certificates,contact]}/>
<Landing/>
<Services ref={services} />
<Skills ref={skills} />
<Projects ref={projects}/>
<Certificates ref={certificates} />
<Contact ref={contact} />
<Footer/>
    </>
  )
}

export default App
