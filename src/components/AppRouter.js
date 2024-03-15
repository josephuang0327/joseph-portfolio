import React from 'react'
import Home from '../pages/Home'
import Education from '../pages/Education'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="" element={<Education/>}></Route>
        <Route path="" element={<Project/>}></Route>
        <Route path="" element={<Skills/>}></Route>
        <Route path="" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
