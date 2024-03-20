import React, { useState } from "react";
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import {asu_fullname_logo, uiuc_logo, new_tsa, asu_welcome_event} from '../resources/images/images.js'
import {asu_new_year, asu_santa_monica, asu_tisa_basketball, french_home_party, asu_bowling} from '../resources/images/images.js'
function Education() {

  const [tabShow, setTabShow] = React.useState("information")

  const handleTabChange = (tabName) => {
    setTabShow(tabName)
  }


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
                  <li className={tabShow === "information" ? "asu-info-tab asu-tab-item" : "asu-info-tab asu-tab-item tab-unselected"} 
                    onClick={() =>handleTabChange("information")}>
                    <span className="asu-tab-bi bi-info-circle"></span> Information</li>

                  <li className={tabShow === "courses" ? "asu-course-tab asu-tab-item" : "asu-info-tab asu-tab-item tab-unselected"}
                    onClick={() =>handleTabChange("courses")}>
                    <span className="asu-tab-bi bi-card-list"></span> Courses</li>
                    
                  <li className= {tabShow === "projects" ? "asu-project-tab asu-tab-item" : "asu-info-tab asu-tab-item tab-unselected"}
                    onClick={() =>handleTabChange("projects")}>
                    <span className='asu-tab-bi bi-file-code'></span> Projects</li>
                </ul>
                <div className="asu-tab-content">
                  <div className={tabShow === "information" ? "asu-info-content-tab" : "asu-info-content-tab tab-item-hide"}>
                    <div className="asu-info-stats">
                      <p className="asu-school">School: Ira A. Fulton Schools of Engineering</p>
                      <p className="asu-degree">Degree: Bachelor of Science</p>
                      <p className="asu-major">Major: Computer Science</p>
                      <p className="asu-gpa">GPA: 3.61</p>
                      <p className="asu-attend-years">Years attended: [2018 - 2022]</p>
                    </div>
                  </div>
                  <div className={tabShow === "courses" ? "asu-course-content-tab" : "asu-course-content-tab tab-item-hide"}>
                    <ul className="course-list">
                      <li className="course-category">Programing Language
                        <li className="course-item">Intro to Programming Languages [C++]</li>
                        <li className="course-item">Principle of Programming Language [C++]</li>
                        <li className="course-item">Principles of Programming [Java]</li>
                        <li className="course-item">Object-Oriented Program & Data [Java]</li>
                        <li className="course-item">Computer Org/Assemb Lang Prog</li>
                      </li>
                      <li className="course-category">Mathematics
                        <li className="course-item">Calculus for Engineers I</li>
                        <li className="course-item">Calculus for Engineers II</li>
                        <li className="course-item">Calculus for Engineers III</li>
                        <li className="course-item">Discrete Mathematics</li>
                        <li className="course-item">Applied Linear Algebra</li>
                        <li className="course-item">Prob & Stats Engr Prob Solving</li>
                      </li>
                      <li className="course-category">Software Development
                        <li className="course-item">Intro to Software Engineering</li>
                        <li className="course-item">Software Analysis and Design</li>

                      </li>
                      <li className="course-category">Algorithm
                        <li className="course-item">Intro Theoretical Computer Science</li>
                        <li className="course-item">Data Structures and Algorithms</li>
                      </li>
                      
                      <li className="course-category">Game Development
                        <li className="course-item">Game Development I</li>
                        <li className="course-item">Game Development II</li>
                        <li className="course-item">Fundamentals of Game Art</li>
                      </li>
                      <li className="course-category">Cybersecurity
                        <li className="course-item">Information Assurance</li>
                        <li className="course-item">Computer and Network Forensics</li>
                      </li>
                      <li className="course-category">Web Development
                        <li className="course-item">Intro to Human Computer Interaction</li>
                        <li className="course-item">Distributed Software Development</li>
                      </li>
                      <li className="course-category">Machine Learning
                        <li className="course-item">Found of Machine Learning</li>
                      </li>
                    </ul>
                  </div>
                  <div className={tabShow === "projects" ? "asu-project-content-tab" : "asu-project-content-tab tab-item-hide"}>
                    in projects
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
