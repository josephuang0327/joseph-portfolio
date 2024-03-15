import React from 'react'

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
