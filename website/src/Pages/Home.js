import React from 'react'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'



function Home() {

  return (
    <div className="Home">
      <div className="headerContainer">
        <h1>Anton Clayton</h1>
        <p>San Jose State University</p>
        <p>Computer Science</p>
        <div className="buttonContainer">
            <button id='button1'>Download Resume</button>

            <a href='https://github.com/antonclayton' target='_blank' rel="noreferrer">
                <button id='button2'>Github</button>
            </a>

            <a href='https://www.linkedin.com/in/anton-clayton-6328b12b0/' target='_blank' rel="noreferrer">
                <button id='button3'>LinkedIn</button>
            </a>
        </div>
      </div>

    </div>
  )
}

export default Home
