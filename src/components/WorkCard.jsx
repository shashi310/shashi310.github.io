import "./WorkCard.css"

import React from 'react'

import { NavLink } from "react-router-dom"
import projectCardData from "./WorkCardData"


const WorkCard = () => {
  return (
    <div className="work-container">
       <h1 className="project-heading">My Projects</h1>
      <div className="project-container">
        {projectCardData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt="image" />
            <h2 className="project-title">{project.title}</h2>
            <div className="pro-details">
              <p>{project.text}</p>
              <p>Tech-Stack : {project.techStack}</p>
              <div className="pro-btns">
                <NavLink to={project.view} className="btn" target="_blank">Live</NavLink>
                <NavLink to={project.git} className="btn" target="_blank">Source</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkCard