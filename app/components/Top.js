import React, {useContext} from "react"
import StateContext from "../StateContext"

function Top() {
  const appState = useContext(StateContext)

  function scrollToSection(el) {
    const section = document.querySelector(`.${el}`)
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <section className="section top">
      <div className="top__titles">
        <h1 className="top__title">Dan Hart</h1>
        <h2 className="top__subtitle">Web Developer</h2>
      </div>

      <menu className="menu top__menu">
        <button onClick={() => scrollToSection("about")} className="menu__button menu__button--about top__button" data-letter="A">
          About
        </button>
        <button onClick={() => scrollToSection("work")} className="menu__button menu__button--work top__button" data-letter="W">
          Work
        </button>
        {/* <button onClick={() => scrollToSection("skills")} className="menu__button menu__button--skills top__button" data-letter="S">
          Skills
        </button> */}
        <button onClick={() => scrollToSection("contact")} className="menu__button menu__button--contact top__button" data-letter="C">
          Contact
        </button>
      </menu>
    </section>
  )
}

export default Top
