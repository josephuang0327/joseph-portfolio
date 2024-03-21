import React, { useState } from "react";
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import {asu_fork_logo, asu_fullname_logo, uiuc_logo, new_tsa, asu_welcome_event} from '../resources/images/images.js'
import {asu_new_year, asu_santa_monica, asu_tisa_basketball, french_home_party, asu_bowling} from '../resources/images/images.js'
import {filetype_py, filetype_java, filetype_css, filetype_html, filetype_cs, filetype_cpp} from '../resources/images/images.js'
import {id_badge, user_tie} from '../resources/images/images.js'
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
              {/* <hr className='asu-header-hr' /> */}
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
                    <div className="info-img-container">
                      <img src={asu_fork_logo} alt="" className="info-fork-img" />
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
                    <ul className="project-lists">{filetype_py} Analyze, merge and stitching photos <span className="project-time">[November 2022]</span> 
                      <li className="project-list-item">Analyze 3 single color channels, stack and align to form a single RGB color image.</li>
                      <li className="project-list-item">Stitching pairs of photos to form a panorama image using SIFT and RANSAC methods.</li>
                    </ul>
                    <ul className="project-lists"> Design The New Cadre company website <span className="project-time">[May 2022] </span> {filetype_html}{filetype_css}
                      <li className="project-list-item">Apply UI/UX theory by using Adobe XD to design features based on company demands.</li>
                      <li className="project-list-item">Establish website basic framework: Login, Home page, search catalog, profile, etc.</li>
                    </ul>
                    <ul className="project-lists">{filetype_py} Create Simple IM-System <span className="project-time">[February 2021] </span>
                      <li className="project-list-item">Created Instant-Message systems that allow clients to communicate with each other.</li>
                      <li className="project-list-item">Design function to allow clients to add, register and leave the contact or contact lists.</li>
                    </ul>
                    <ul className="project-lists">{filetype_cpp} Construct Simple Data Algorithm Sorting <span className="project-time">[November 2020] </span>
                      <li className="project-list-item">Apply different algorithms to sort and search through objects, items and routes.</li>
                      <li className="project-list-item">Analyzing and comparing the efficiency of different sorting and searching algorithms.</li>
                      <li className="project-list-item">Algorithms and data structures used for this project include hash table, red-black tree, etc.</li>
                    </ul>
                    <ul className="project-lists">{filetype_java} Build Student attendance record system <span className="project-time">[November 2020] </span>
                      <li className="project-list-item">Built a GUI with a menu bar with functions to load roaster, add attendance and save files.</li>
                      <li className="project-list-item">Generate a plot to display the number of attendees and attended time.</li>
                    </ul>
                    <ul className="project-lists">{filetype_cs} Code 3D Games <span className="project-time">[December 2019] </span> 
                      <li className="project-list-item">Built a fusion of a TPS game and a puzzle game and implemented navMesh systems.</li>
                      <li className="project-list-item">Created a parkour game that manipulates gravity systems and physics.</li>
                      <li className="project-list-item">Using Github as a version control system. Able to discuss ideas, goals, and present to an open audience.</li>
                    </ul>
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
                  <li className="tsa-job-title">{id_badge}ASU TISA - Secretary 
                    <span className='job-title-years'> [August 2019- August 2020]</span>
                  </li>
                  <li className="tsa-job-title">{user_tie}ASU TISA - Vice President
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
