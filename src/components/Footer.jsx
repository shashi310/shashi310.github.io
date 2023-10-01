import React from 'react'
import "./FooterStyles.css"
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <h4>
                <FaHome size={20} style={{
                    color:"#fff,",
                    marginRight:"2rem"
                }}/>
               </h4>
                <div>
                    <p>Varanasi</p>
                    <p>Uttar Pradesh</p>
                </div>

                </div>

                <div className='phone'>
                <h4><FaPhone size={20} style={{
                    color:"#fff,",
                    marginRight:"2rem",
                }}/>
                +91-9458707066</h4>
                </div>

                <div className='email'>
                <h4><FaMailBulk size={20} style={{
                    color:"#fff,",
                    marginRight:"2rem",
                }}/>
                Shashi31396s@gmail.com</h4>
                </div>

            </div>
            
            <div className='right'>
                <h4>ABout Me</h4>
            <p>Experienced MERN Full Stack Developer. Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Committed to delivering high-quality code, detail-oriented, and collaborative in cross-functional teams for innovative solutions</p>
            <div className='social'>
         

    {/* <h4>
    <FaGithub size={30}  style={{
                    color:"#fff,",
                    marginRight:"2rem",
                }}/>
                </h4> */}
            
     <h4>
        <a
          href="https://github.com/shashi310"
          target="_blank"  // Open link in a new tab
          rel="noopener noreferrer" // Recommended for security reasons
          style={{ textDecoration: 'none', color: '#fff', marginRight: '2rem' }}
        >
          <FaGithub size={30} />
        </a>
    </h4>

<h4>
     <a
          href="https://www.linkedin.com/in/shashikant-yadav-6b9a46104/"
          target="_blank"  // Open link in a new tab
          rel="noopener noreferrer" // Recommended for security reasons
          style={{ textDecoration: 'none', color: '#fff', marginRight: '2rem' }}
        >
      <FaLinkedin size={30} />
    </a>
</h4>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer