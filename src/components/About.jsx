import React from 'react'
import './Style/about.css'

// import navigation scroll
import { Element } from 'react-scroll'


import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <Element className="about">
      <div className="container">
        <div className="image"><img src="/public/images/img_01.jpg" alt="" /></div>

        <div className="content">
          <h2>Let me <span className="colorTx">introduce myself</span></h2>
          <p>Hello everyone who comes to read. Let me introduce you first. My name is Chatchawan Ngernthaworn. My nickname is Dew. I am a programmer who works at the front of the house and back of the house. Now I'm interested in working as a frontend developer and doing work that gives me challenges. My hobby is Study and gain new knowledge, read books, play games, write programs, etc.</p>
          <p>Currently studying at Bangkok University, 4nd year, Faculty of Information Technology and Innovation. Department of Computer Science Very glad to meet friends experienced I'm ready to embrace new things. and new connection</p>

          <div className="dataBx">
            <div className="leftData">
              <ul>
            <li>Name</li> 
            <li>Nickname</li> 
            <li>Age</li> 
            <li>Birthday</li> 
            <li>Gender</li> 
            <li>Nationality</li> 
            <li>Email</li>
            <li>Address</li>
            <li>University</li>
            <li>Interested occupation</li>
            </ul>
            </div>
            <div className="rightData">
              <ul>
            <li> : Chatchawan Ngernthaworn</li>
            <li> : Dew</li>
            <li> : 21</li>
            <li> : 13 february 2004</li>
            <li> : Men</li>
            <li> : Thai</li>
            <li> : Chatchawan13022547@gmail.com</li>
            <li> : Pathumthani </li>
            <li> : Bangkok University</li>
            <li> : Frontend , Software Tester , Automation Tester , Quality Assurance (QA) Engineer</li>
            </ul>
            </div>
          </div>
         
      <Link className='about_Btn' to="https://www.youtube.com/channel/UCS6vnH1T1TH_mIBCH1o9AkQ">My project in youtube</Link>
        </div>
      </div>
    </Element>
    </>
  )
}

export default About