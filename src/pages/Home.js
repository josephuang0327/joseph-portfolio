import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home(){
    return (
        <>
            <Navbar/>
            
            <div className="home-content">
                <h1 className="home-intro">Hey, This is Joseph Huang</h1>
                <h2 className="home-intro-description">A Web Developer</h2>
                <button className="home-intro-learn-more">Learn more</button>
                <button className="home-intro-download">Download CV</button>
            </div>
            <img src="" alt="" className="home-photo" />

            <Footer/>
        </>
    )
}