import React from 'react'
import Home from '../pages/Home'
import Education from '../pages/Education'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/education/" element={<Education/>}></Route>
        <Route path="/projects/" element={<Projects/>}></Route>
        <Route path="/skills/" element={<Skills/>}></Route>
        <Route path="/contact/" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

