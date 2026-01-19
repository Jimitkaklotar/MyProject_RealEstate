import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/Project'
import Facility from './Components/Facility'
import Team from './Components/Team'
import Review from './Components/Review'
import Blog from "./Components/Blog"


function App() {


  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Project />
        <Facility />
        <Team />
        <Review />
        <Blog />
      </div>
    </>
  )
}

export default App
