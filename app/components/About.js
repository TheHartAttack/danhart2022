import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFileDownload} from "@fortawesome/free-solid-svg-icons"

function About() {
  return (
    <section className="section about">
      <span className="about__hi fade-in">Hi, I'm Dan</span>
      <p className="about__paragraph fade-in">I’m a web developer from Woking, Surrey. I’ve been coding since 2016, primarily working with front-end technologies but with some back-end experience too. Aside from standard HTML and CSS, I mostly use Javascript and related tools - including React, Node, Webpack, Express, Vue, jQuery and various other libraries.</p>
      <p className="about__paragraph fade-in">I’ve previously worked at a digital marketing agency in Guildford as the senior member of a small web team focused on building Wordpress sites, and have since continued expanding my skillset through personal projects and educational courses. I am now available and looking for new opportunities - ideally a full-time work-from-home role.</p>
      <a href="/cv.pdf" download className="about__cv button fade-in">
        <span>Download my CV</span>
        <FontAwesomeIcon icon={faFileDownload} />
      </a>
    </section>
  )
}

export default About
