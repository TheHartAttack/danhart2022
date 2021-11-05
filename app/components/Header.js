import React, {useEffect, useContext} from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"

//Components
import Logo from "./Logo"

function Header() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function scrollToSection(el) {
    const section = document.querySelector(`.${el}`)
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  }

  function handleMenu() {
    if (appState.menuOpen) {
      appDispatch({type: "closeMenu"})
    } else {
      appDispatch({type: "openMenu"})
    }
  }

  return (
    <header className={`header${appState.section == "top" ? " header--hidden" : ""}`}>
      <button onClick={() => scrollToSection("top")} className={`header__logo ${appState.menuOpen ? "header__logo--hidden" : ""}`}>
        <Logo className="header__svg" />
      </button>

      {appState.size == "huge" && (
        <menu className="menu">
          <button onClick={() => scrollToSection("about")} className={`menu__button menu__button--about${appState.section == "about" ? " menu__button--active" : ""}`} data-letter="A">
            About
          </button>
          <button onClick={() => scrollToSection("work")} className={`menu__button menu__button--work${appState.section == "work" ? " menu__button--active" : ""}`} data-letter="W">
            Work
          </button>
          <button onClick={() => scrollToSection("skills")} className={`menu__button menu__button--skills${appState.section == "skills" ? " menu__button--active" : ""}`} data-letter="S">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className={`menu__button menu__button--contact${appState.section == "contact" ? " menu__button--active" : ""}`} data-letter="C">
            Contact
          </button>
        </menu>
      )}

      {(appState.size == "large" || appState.size == "medium" || appState.size == "small" || appState.size == "tiny") && (
        <button className={`burger  ${appState.menuOpen ? "burger--active" : ""}`} onClick={handleMenu}>
          {appState.menuOpen && <FontAwesomeIcon icon={faTimes} className="burger__icon" />}
          {!appState.menuOpen && <FontAwesomeIcon icon={faBars} className="burger__icon" />}
        </button>
      )}
    </header>
  )
}

export default Header
