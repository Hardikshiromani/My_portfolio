import { useState } from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Navbar from './Comps/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'
import About from './sections/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: true,      // animate only once
      easing: "ease-in-out"
    });
  }, []);
  return (
    <>
    <Navbar/> 
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Contacts/>
    </>
  )
}

export default App
