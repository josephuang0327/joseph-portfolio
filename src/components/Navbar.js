import React, { useState } from "react";
import "../stylesheets/Navbar.css"
import LangSwitch from './LangSwitch.js'
function Navbar(){
    const location = window.location.href.split("/#")[1]

    const [navOpen, setNavOpen] = React.useState(false);

    const handleNavOpen = () => {
        setNavOpen(true)
        console.log("true")
    }
    const handleNavClose = () => {
        setNavOpen(false)
        
    }

    return (
        <>
            <div className="navbar-container" onMouseLeave={handleNavClose}>
            <a className="navbar-name-logo" href="/personal-portfolio/#/">Joseph Huang</a>
                <ul className="navbar-tabs">
                    <li className={"navbar-tab-item"}><a href="/personal-portfolio/#/">Home</a></li>
                    <li className={"navbar-tab-item"} onMouseEnter={handleNavOpen}><a href="">About</a></li>
                    <li className={navOpen === true ? "nav-item-open nav-tab-item" : "nav-item-close nav-tab-item"}><a href="/personal-portfolio/#/education/">Education</a></li>
                    <li className={navOpen === true ? "nav-item-open nav-tab-item" : "nav-item-close nav-tab-item"}><a href="/personal-portfolio/#/skills/">Skills</a></li>
                    <li className={navOpen === true ? "nav-item-open nav-tab-item" : "nav-item-close nav-tab-item"}><a href="/personal-portfolio/#/projects/">Projects</a></li>
                    <li className={"navbar-tab-item"}><a href="/personal-portfolio/#/contact/">Contact</a></li>
                </ul>
                <LangSwitch />
            </div>
            
            <hr />
        </>
    )
}

export default Navbar
