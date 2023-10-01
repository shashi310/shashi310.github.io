import React from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import { Route,Routes } from 'react-router-dom'
import Skills from './Skills'
import Resume from './Resume'
import MyStats from './MyStats'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/myStats" element={<MyStats />} />
            {/* <Route path="/resume" element={<Resume />} /> */}

        </Routes>
    </div>
  )
}

export default MainRoutes 