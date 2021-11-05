import React, {useContext} from "react"
import StateContext from "../StateContext"
import SkillGrid from "./SkillGrid"

function Skills() {
  const appState = useContext(StateContext)

  const skills = [
    {
      skill: "HTML",
      level: 9,
      type: "basic"
    },
    {
      skill: "CSS",
      level: 9,
      type: "basic"
    },
    {
      skill: "Javascript",
      level: 9,
      type: "basic"
    },
    {
      skill: "React",
      level: 9,
      type: "js"
    },
    {
      skill: "Vue",
      level: 6,
      type: "js"
    },
    {
      skill: "Wordpress",
      level: 9,
      type: "misc"
    },
    {
      skill: "Webpack",
      level: 9,
      type: "js"
    },
    {
      skill: "Git",
      level: 6,
      type: "misc"
    },
    {
      skill: "SASS",
      level: 9,
      type: "style"
    },
    {
      skill: "PostCSS",
      level: 6,
      type: "style"
    },
    {
      skill: "jQuery",
      level: 9,
      type: "js"
    },
    {
      skill: "Node",
      level: 9,
      type: "js"
    },
    {
      skill: "Express",
      level: 6,
      type: "js"
    },
    {
      skill: "Photoshop",
      level: 9,
      type: "gfx"
    },
    {
      skill: "Illustrator",
      level: 9,
      type: "gfx"
    },
    {
      skill: "After Effects",
      level: 3,
      type: "gfx"
    },
    {
      skill: "PHP",
      level: 3,
      type: "misc"
    },
    {
      skill: "Bootstrap",
      level: 3,
      type: "style"
    },
    {
      skill: "SQL",
      level: 3,
      type: "db"
    },
    {
      skill: "Firebase",
      level: 6,
      type: "db"
    },
    {
      skill: "MongoDB",
      level: 9,
      type: "db"
    },
    {
      skill: "Three",
      level: 3,
      type: "js"
    },
    {
      skill: "GSAP",
      level: 3,
      type: "js"
    }
  ]

  return (
    <section className="section skills">
      <p className="skills__paragraph">Here is an overview of my technical skillset, including my level of experience with each skill:</p>

      {(appState.size == "tiny" || appState.size == "small" || appState.size == "medium") && (
        <div className="skills__column">
          <SkillGrid skills={skills} title="Basics" type="basic" />
          <SkillGrid skills={skills} title="Styling" type="style" />
          <SkillGrid skills={skills} title="Javascript" type="js" />
          <SkillGrid skills={skills} title="Graphics" type="gfx" />
          <SkillGrid skills={skills} title="Database" type="db" />
          <SkillGrid skills={skills} title="Other" type="misc" />
        </div>
      )}

      {(appState.size == "large" || appState.size == "huge") && (
        <>
          <div className="skills__column">
            <SkillGrid skills={skills} title="Basics" type="basic" />
            <SkillGrid skills={skills} title="Styling" type="style" />
            <SkillGrid skills={skills} title="Graphics" type="gfx" />
          </div>

          <div className="skills__column">
            <SkillGrid skills={skills} title="Javascript" type="js" />
            <SkillGrid skills={skills} title="Database" type="db" />
            <SkillGrid skills={skills} title="Other" type="misc" />
          </div>
        </>
      )}
    </section>
  )
}

export default Skills
