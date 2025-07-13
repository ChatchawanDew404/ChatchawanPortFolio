import React from 'react'
import './Style/skill.css'




function Skill() {
  return (
    <section className="skill">
      <div className="container">
        <div className="heading"><h2>MY <span className="colorTx">SKILL</span></h2></div>

        <div className="row">
          <div className="col"><img src="/public/images/icons8-html-48.png" alt="" /><p className='skillTx'>HTML</p></div>
          <div className="col"><img src="/public/images/icons8-css-48.png" alt="" /><p className="skillTx">CSS</p></div>
          <div className="col"><img src="/public/images/icons8-javascript-48.png" alt="" /><p className="skillTx">Javascript</p></div>
          <div className="col"><img src="/public/images/icons8-react-native-48.png" alt="" /><p className="skillTx">React</p></div>
          <div className="col"><img src="/public/images/icons8-nodejs-48.png" alt="" /><p className="skillTx">Node.js</p></div>
          <div className="col"><img src="/public/images/icons8-sql-48.png" alt="" /><p className="skillTx">SQL</p></div>
          <div className="col"><img src="/public/images/icons8-mysql-48.png" alt="" /><p className="skillTx">MySQL</p></div>
          <div className="col"><img src="/public/images/icons8-figma-48.png" alt="" /><p className="skillTx">Figma</p></div>
          <div className="col"><img src="/public/images/icons8-python-48.png" alt="" /><p className="skillTx">Python</p></div>
          <div className="col"><img src="/public/images/robot_framework.png" alt="" /><p className="skillTx">Robot Framework</p></div>
        </div>
      </div>
    </section>
  )
}

export default Skill