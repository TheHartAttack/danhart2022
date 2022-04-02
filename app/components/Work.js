import React from "react"
import $ from "jquery"
import mgGlitch from "../assets/scripts/Glitch"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons"
import projects from "../assets/scripts/Projects"

//Components
import DigitalLines from "./DigitalLines"

function Work() {
  return (
    <section className="section work">
      <div className="work__container">
        <h2 className="work__heading">My Work</h2>

        {projects.map((project, index) => {
          return (
            <div key={index} className="project">
              <div className="project__text">
                {Boolean(project.name) && <h3 className="project__title">{project.name}</h3>}

                {Boolean(project.description) && <p className="project__description">{project.description}</p>}

                {Boolean(project.tech.length) && (
                  <ul className="project__tech">
                    <h4>Key Tech:</h4>
                    {project.tech.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                )}

                <div className="project__links">
                  {Boolean(project.link) && (
                    <a className="button" href={project.link} target="_blank">
                      <span>Link</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  )}

                  {Boolean(project.github) && (
                    <a className="button" href={project.github} target="_blank">
                      <span>Github</span>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project__line"></div>

              <div className="project__image-wrapper">
                <DigitalLines />
                {Boolean(project.image) && <div className="project__image image" data-image={`./assets/images/${project.image}`}></div>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work
