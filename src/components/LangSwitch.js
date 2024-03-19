import React from 'react'
import "../stylesheets/LangSwitch.css"

function LangSwitch() {
  return (
    <div className="navbar-lang-switch">
        <button className="navbar-lang-chinese">中文</button>
        <button className="navbar-lang-english">English</button>
    </div>
  )
}

export default LangSwitch
