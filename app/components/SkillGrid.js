import React from "react"

import GridLabels from "./GridLabels"

function SkillGrid(props) {
  return (
    <div className="skills__grid">
      <h3 className="skills__title">{props.title}</h3>
      <div className="skills__grid-inner">
        {props.skills.map((item, index) => {
          if (item.type == props.type) {
            const hexes = []
            for (let i = 0; i < item.level; i++) {
              hexes.push(i + 1)
            }
            return (
              <div key={index} className="skills__item">
                <div className="skills__skill">{item.skill}</div>
                <div className="skills__level">
                  {hexes.map(hex => {
                    return (
                      <div key={hex} className="skills__hex">
                        <div className="skills__hex-inner"></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
        })}
        <GridLabels />
      </div>
    </div>
  )
}

export default SkillGrid
