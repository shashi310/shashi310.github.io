import React, { useState } from 'react'
import  "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes}  from "react-icons/fa"

const Navbar = () => {
    const[click,setClick]=useState(false)
    const handleClick = () =>{
        setClick(!click)
    }

    // color change of nav bar while scrolling

    const [color,setColor]=useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)


  return (
    <div className={color? "Header Header-bg" : "Header"}>
        <Link to={"/"} ><h1>Shashikant Yadav</h1></Link>
        <ul className={click ? ("nav-menu active"):("nav-menu")}>
            {/* <li>
            <Link to={"/"} >Home</Link>
            </li> */}
            <li>
            <Link to={"/about"} >About</Link>
            </li>
            <li>
            <Link to={"/skills"} >Skills</Link>
            </li>
            <li>
            <Link to={"/myStats"} >My Stats</Link>
            </li>
            <li>
            <Link to={"/project"} >Projects</Link>
            </li>
            
            <li>
            <Link to={"/contact"} >Contact</Link>
            </li>
            
            <li>
            {/* <Link to={"https://shashi310.github.io/buyFromUsApi/Shashikant_Yadav.pdf"} >Resume</Link> */}
            <a 
            href="https://shashi310.github.io/buyFromUsApi/Shashikant_Yadav.pdf"
            target="_blank"  // Open link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
            
            >Resume</a>
            </li>
        </ul>

     <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes  size={20} style={{
            color:"white"
        }} />) : ( <FaBars  size={20} style={{
            color:"white"
        }} />)}
       

       
        
        </div> 
    </div>
  )
}

export default Navbar