import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import Mern1 from "../resources/Mern1.jpg"
import Mern2 from "../resources/Mern2.jpg"


const AboutContent = () => {
  return (
<div className="about">
 <div className="left">
    <h1>Who Am I ?</h1>
    <p>Results-driven Full Stack Web Developer proficientin MERN stack, with a 1200+ hour webdevelopment course from Masai school, Skilled inHTML, CSS, JavaScript, React, Node.js, andMongoDB. Detail-oriented and analytical,committed to delivering high-quality code and collaborating effectively in cross-functional teamsto drive innovative solutions</p>

   
    <Link to="https://shashi310.github.io/buyFromUsApi/Shashikant_Yadav.pdf" target="_blank"><button className="btn">Resume</button></Link>
    
 </div>
 <div className="right">
    <div className="img-container">
        <div className="img-stack-top">
<img src={Mern1} className="img" alt="Mern1" />
        </div>
        <div className="img-stack-bottom">
<img src={Mern2} className="img" alt="Mern2" />
        </div>
    </div>
 </div>
</div>
  )
}

export default AboutContent