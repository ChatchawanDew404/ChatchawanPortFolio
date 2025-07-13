import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'

// import all component
import Banner from './components/Banner'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Course from './components/Course'


function App() {
  return (
    <>
    <NavigationBar/>
    <Banner/>
    <About/>
    <Skill/>
    <Project/>
    <Course/>
    <Contact/>
    </>
  )
}

export default App
