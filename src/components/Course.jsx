import React from 'react'
import './Style/course.css'

function Course() {
  return (
    <section className="course">
        <div className="container">
            <div className="heading"><h2>MY <span className="colorTx">Tester Knowledge</span></h2></div>

            <div className="content">
                <div className="image"><img src="/images/testerCourse.png" alt="" /></div>
            </div>
        </div>
    </section>
  )
}

export default Course