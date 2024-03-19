import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {port_test} from '../resources/images/images'

function Home(){
    return (
        <>
        <Navbar/>
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-intro">Hey, This is <br /> Joseph Huang</h1>
                    <h2 className="home-intro-description">A Web Developer</h2>
                    <button className="home-intro-btn home-intro-learn-more">Learn more</button>
                    <button className="home-intro-btn home-intro-download">Download CV</button>
                </div>
                <div className='img-container'><img src={port_test} alt="home-photo" className="home-photo" /></div> 
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home