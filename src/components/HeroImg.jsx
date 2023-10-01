import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../resources/IntoBG.jpg"
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
<img className='into-img' src={IntroImg} alt="BannerImg"/>
        </div>
        <div className='content'>
            <p>HI I'M SHASHIKANT YADAV</p>
            <h1>Full Stack Web Developer</h1>
            <div>
            <Link to="/project" className='btn'>PROJECTS</Link>
            {/* <Link to="/contact" className='btn-light'>Contact</Link> */}
            <button className="btn-light" ><a 
            href="https://shashi310.github.io/buyFromUsApi/Shashikant_Yadav.pdf"
            target="_blank"  // Open link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
            
            >Resume</a></button>
            </div>
        </div>
    </div>
  )
}

export default HeroImg