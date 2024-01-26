import React from 'react'
import '../Styles/About.css'
import Me from '../Assets/websitePicture.jpg'
import Yoshi from '../Assets/RegalYoshi.jpg'
import Sleepy from '../Assets/MimiSleep.jpg'

function About() {
  return (
    <div className='About'>
        <div className='AboutContainer'>
            <div className='leftSide'>
                <h1>About me!</h1>
                <p>Hello! My name is <span className='blue-text'>Anton Clayton</span>. I am currently a computer science major at <span className='blue-text'>San Jose State University</span>. 
                At the moment, my passions are coding, fashion, and learning Japanese. 
                All three of my passions can be found on this website through the tabs at the top 
                with "Misc" representing my interests besides computer science. 
                </p>
            </div>

            <div className='rightSide'>
                <div className='MyPicture'>
                    <img id='me' src={Me}></img>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default About
