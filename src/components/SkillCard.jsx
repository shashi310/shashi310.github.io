import React from 'react'


import html from "../imgs/html.png"
import css from "../imgs/css.png"
import js from "../imgs/js.png"
import chakra from "../imgs/chakra.jpg"
import redux from "../imgs/redux.png"
import react from "../imgs/react.png"
import node from "../imgs/node.png"
import express from "../imgs/express.jpg"
import vercel from "../imgs/vercel.png"
import netlify from "../imgs/netlify.png"
import github from "../imgs/github.png"
import mongo from "../imgs/mongo.png"
import ts from "../imgs/ts.png"
import tail from "../imgs/tail.jpg"
import render from "../imgs/render.png"
import cyclic from "../imgs/cyclic.png"

import "./SkillCardStyles.css"


const SkillCard = () => {
  return (
    <>
    <h1 style={{
      paddingTop: "20px",
      textAlign: "center"
    }}>Tech Stacks</h1>
    <div className='Skill-Container'>
      
      <div className='styl'>
      <img src={html} alt="html" />\
      <p>HTML</p>
      </div>
      <div className='styl'>
      <img src={css} alt="html" />
      <p>CSS</p>
      </div>
      <div className='styl'>
      <img src={js} alt="html" />
      <p>JavaScript</p>
      </div>
      <div  className='styl'>
      <img src={react} alt="html"/>\
      <p>React</p>
      </div>
      <div className='styl'>
      <img src={redux} alt="html" />\
      <p>Redux</p>
      </div>
      <div className='styl'>
      <img src={chakra} alt="html" />\
      <p>Chakra UI</p>
      </div>
      <div className='styl'>
      <img src={tail} alt="html" />\
      <p>Tailwind CSS</p>
      </div>
       

    <div className='styl'>
      <img src={node} alt="html" />\
      <p>Node JS</p>
    </div>
    <div className='styl'>
      <img src={express} alt="html" />\
      <p>Express JS</p>
    </div>
    <div className='styl'>
      <img src={mongo} alt="html" />\
      <p>MongoDB</p>
    </div>
    <div className='styl'>
      <img src={ts} alt="html" />\
      <p>TypeScript</p>
    </div>
    <div className='styl'>
      <img src={github} alt="html" />\
      <p>Github</p>
    </div>

    </div>


    <h1 style={{
      marginTop:"20px",
      textAlign: "center"
    }}>Hosting Platforms</h1>
    <div className='Skill-Container'>

    <div className='styl'>
      <img src={vercel} alt="html" />\
      <p>Vercel</p>
    </div>
    <div className='styl'>
      <img src={netlify} alt="html" />\
      <p>Netlify</p>
    </div>
    <div className='styl'>
      <img src={github} alt="html" />\
      <p>Github Pages</p>
    </div>
    <div className='styl'>
      <img src={cyclic} alt="html" />\
      <p>Cyclic</p>
    </div>
    <div className='styl'>
      <img src={render} alt="html" />\
      <p>Render</p>
    </div>
    </div>
    </>
  )
}

export default SkillCard