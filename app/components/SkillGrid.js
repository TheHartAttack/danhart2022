import React, {useRef, useEffect} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import GridLabels from "./GridLabels"

gsap.registerPlugin(ScrollTrigger)

function SkillGrid(props) {
  const hexRefs = useRef([])
  hexRefs.current = []

  useEffect(() => {
    const hexWidth = document.querySelector(".skills__hex").getBoundingClientRect().width
    const startPoint = window.innerHeight * 0.75

    hexRefs.current.forEach(el => {
      el.querySelectorAll(".skills__hex").forEach((hex, index) => {
        gsap.fromTo(
          hex,
          {
            x: -hexWidth / 2,
            opacity: 0,
            rotation: -45
          },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.125,
            ease: "none",
            scrollTrigger: {
              id: "",
              trigger: hex.parentElement,
              start: `top ${startPoint}`,
              toggleActions: "play none none none"
              //markers: true
            },
            delay: index * 0.125
          }
        )
      })
    })
  }, [])

  const addToRefs = el => {
    if (el && !hexRefs.current.includes(el)) {
      hexRefs.current.push(el)
    }
  }

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
              <div key={index} className="skills__item" ref={addToRefs}>
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
