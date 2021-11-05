import React, {useContext} from "react"
import DispatchContext from "../DispatchContext"

function OverlayMenu() {
  const appDispatch = useContext(DispatchContext)

  function scrollToSection(el) {
    appDispatch({type: "closeMenu"})

    const section = document.querySelector(`.${el}`)
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <menu className="menu overlay__menu">
      <button onClick={() => scrollToSection("about")} className="menu__button menu__button--about overlay__button" data-letter="A">
        About
      </button>
      <button onClick={() => scrollToSection("work")} className="menu__button menu__button--work overlay__button" data-letter="W">
        Work
      </button>
      <button onClick={() => scrollToSection("skills")} className="menu__button menu__button--skills overlay__button" data-letter="S">
        Skills
      </button>
      <button onClick={() => scrollToSection("contact")} className="menu__button menu__button--contact overlay__button" data-letter="C">
        Contact
      </button>
    </menu>
  )
}

export default OverlayMenu
