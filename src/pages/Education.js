import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import {asu_fullname_logo, uiuc_logo, new_tsa} from '../resources/images/images.js'

function Education() {
  return (
    <>
      <Navbar />
        <div className="edu-wrapper">
          <div className="edu-container">
            <div className="edu-asu-container">
              <div className="asu-header">
                <div className="asu-logo-container"><img src={asu_fullname_logo} alt="asu-logo" className="edu-asu-logo" /></div>
              </div>
              <hr className='asu-header-hr' />
              <div className="asu-content">

                <ul className="asu-content-tabs">
                  <li className="asu-info-tab asu-tab-item">Info</li>
                  <li className="asu-course-tab asu-tab-item">Courses</li>
                  <li className="asu-project-tab asu-tab-item">Projects</li>
                </ul>
                <hr className="asu-tabs-hr" />
                <div className="asu-tab-content">
                  <div className="asu-info-content-tab">
                    <div className="asu-content-stats">
                      <p className="asu-school">School: Ira A. Fulton Schools of Engineering</p>
                      <p className="asu-degree">Degree: Bachelor of Science</p>
                      <p className="asu-major">Major: Computer Science</p>
                      <p className="asu-gpa">GPA: 3.61</p>
                      <p className="asu-attend-years">Years attended: [2018 - 2022]</p>
                    </div>
                  </div>
                  <div className="asu-course-content-tab"></div>
                  <div className="asu-project-content-tab"></div>
                </div>
              </div>
              <div className="award-title-container">
                <hr className="award-title-hr-left award-title-hr" />
                <p className="award-title">Awards</p>
                <hr className="award-title-hr-right award-title-hr" />
              </div>
              <div className="award-content-container">
                <ul className="award-list">
                  <li className="award-item">4 Years Scholarships</li>
                  <li className="award-item award-degree-honors">Magna Cum Laude</li>
                  <li className="award-item">Dean's List for 2019 Spring semester</li>
                  <li className="award-item">Dean's List for 2019 Fall semester</li>
                  <li className="award-item">Dean's List for 2020 Spring semester</li>
                  <li className="award-item">Dean's List for 2020 Fall semester</li>
                  <li className="award-item">Dean's List for 2021 Spring semester</li>
                  <li className="award-item">Dean's List for 2022 Spring semester</li>
                </ul>
              </div>
            </div>

            <div className="edu-tsa-container">
              <p className="edu-tsa-title edu-title">Taiwanese Student Association</p>
              <div className="tsa-logo-container "><img src={new_tsa} alt="tsa-logo" className="edu-tsa-logo" /></div>
            </div>
          </div>
        </div>

      <Footer />
    </>
  )
}

export default Education
