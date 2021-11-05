import React from "react"
import $ from "jquery"
import mgGlitch from "../assets/scripts/Glitch"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons"

function Work() {
  const projects = [
    {
      name: "VibeRates",
      link: "https://viberat.es",
      image: "viberates.jpg"
    },
    {
      name: "The Hart Attack",
      link: "https://thehartattack.com",
      image: "thehartattack.jpg"
    },
    {
      name: "The Apocalypse",
      link: "https://thehartattack.github.io/apocalypse",
      image: "theapocalypse.jpg"
    },
    {
      name: "Stardust Festival",
      link: "https://danhart.uk/stardustfestival",
      image: "stardustfestival.jpg"
    },
    {
      name: "Dan Hart (2019)",
      link: "https://danhart.uk/2019",
      image: "danhart2019.jpg"
    },
    {
      name: "Dan Hart (2017)",
      link: "https://danhart.uk/2017",
      image: "danhart2017.jpg"
    },
    {
      name: "Heretic Hearts",
      link: "https://heretic-hearts.firebaseapp.com",
      image: "heretichearts.jpg"
    }
  ]

  return (
    <section className="section work">
      <p className="work__paragraph">These are a selection of websites I've built over the years to showcase my ability, featuring a variety of different methods and tools. Please visit the link underneath to see the source code on my Github page.</p>

      <div className="work__container">
        {projects.map((project, index) => {
          return (
            <a key={index} href={project.link} target="_blank" className="work__item">
              <div className="work__image-container">
                <div className="work__image" style={{backgroundImage: `url(./assets/images/${project.image})`}}></div>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="work__link-icon" />
              </div>
            </a>
          )
        })}
      </div>

      <a href="https://github.com/TheHartAttack" target="_blank" rel="noopener noreferrer" className="work__link button">
        <span>Source code</span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </section>
  )
}

export default Work
