import React, { useState } from "react";

function Navbar(){
    const [navOpen, setNavOpen] = React.useState(false);


    const handleNavOpen = () => {
        setNavOpen(true)
    }
    const handleNavClose = () => {
        setNavOpen(false)
    }

    return (
        <>
            <div className="navbar-container" onMouseLeave={handleNavClose}>
                <ul className="navbar-tabs">
                    <li className="navbar-name-logo">Joseph Huang</li>
                    <li className="navbar-tab-item">Home</li>
                    <li className="navbar-tab-item">About</li>
                    <li className="navbar-tab-item">Education</li>
                    <li className="navbar-tab-item">Skills</li>
                    <li className="navbar-tab-item">Projects</li>
                    <li className="navbar-tab-item">Contact</li>
                </ul>
            </div>
            <div className="navbar-lang-switch">
                <div className="navbar-lang-chinese"></div>
                <div className="navbar-lang-English"></div>
            </div>
            <div className="line-seperator"></div>
        </>
    )
}