import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import {asu_fullname_logo, uiuc_logo, new_tsa, asu_welcome_event} from '../resources/images/images.js'
import {asu_new_year, asu_santa_monica, asu_tisa_basketball, french_home_party, asu_bowling} from '../resources/images/images.js'
function Education() {
  return (
    <>
      <Navbar />
        <div className="edu-wrapper">
          <div className="edu-container">
            <div className="edu-asu-container">
              <div className="asu-logo-container">
                <a href="https://www.asu.edu/" target="_blank" className="asu-link">
                  <img src={asu_fullname_logo} alt="asu-logo" className="edu-asu-logo" />
                </a>
              </div>
              <hr className='asu-header-hr' />
              <div className="asu-content">

                <ul className="asu-content-tabs">
                  <li className="asu-info-tab asu-tab-item">
                    <span className="asu-tab-bi bi-info-circle"></span><br />Info</li>
                  <li className="asu-course-tab asu-tab-item">
                    <span className="asu-tab-bi bi-card-list"></span><br />Courses</li>
                  <li className="asu-project-tab asu-tab-item">
                    <span className='asu-tab-bi bi-file-code'></span><br />Projects</li>
                </ul>
                <hr className="asu-tabs-hr" />
                <div className="asu-tab-content">
                  <div className="asu-info-content-tab">
                    <div className="asu-info-stats">
                      <p className="asu-school">School: Ira A. Fulton Schools of Engineering</p>
                      <p className="asu-degree">Degree: Bachelor of Science</p>
                      <p className="asu-major">Major: Computer Science</p>
                      <p className="asu-gpa">GPA: 3.61</p>
                      <p className="asu-attend-years">Years attended: [2018 - 2022]</p>
                    </div>
                  </div>
                  <div className="asu-course-content-tab">

                  </div>
                  <div className="asu-project-content-tab">

                  </div>
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
              <div className="tsa-logo-container">
                <a href="https://www.instagram.com/asu.tsa?igsh=cHp2bWltYTE3bDJx" target="_blank" className="tsa-insta-link">
                  <img src={new_tsa} alt="tsa-logo" className="edu-tsa-logo" />
                </a>
              </div>
              <hr className='tsa-header-hr' />
              <div className="tsa-content-container">
                <ul className="tsa-job-title-list">
                  <li className="tsa-job-title">ASU TISA - Secretary 
                    <span className='job-title-years'> [August 2019- August 2020]</span>
                  </li>
                  <li className="tsa-job-title">ASU TISA - Vice President
                    <span className='job-title-years'> [August 2020-August 2021]</span>
                  </li>
                </ul>
              </div>
              <div className="event-photo-container">
                <img src={asu_new_year} alt="asu_new_year" className="tsa-photo" />
                <img src={asu_santa_monica} alt="asu_santa_monica" className="tsa-photo" />
                <img src={asu_tisa_basketball} alt="asu_tisa_basketball" className="tsa-photo" />
                <img src={french_home_party} alt="french_home_party" className="tsa-photo" />
                <img src={asu_bowling} alt="asu_bowling" className="tsa-photo" />
                <img src={asu_welcome_event} alt="asu_welcome_event" className="tsa-photo" />
              </div>
            </div>
          </div>
        </div>

      <Footer />
    </>
  )
}

export default Education
