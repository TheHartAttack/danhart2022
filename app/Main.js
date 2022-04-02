import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import {CSSTransition} from "react-transition-group"
import {useImmerReducer} from "use-immer"
import {throttle, debounce} from "lodash"
import Color from "color"
import ThemeColor from "./assets/scripts/ThemeColor"
import Matrix from "./assets/scripts/Matrix"
import ImageGlitch from "./assets/scripts/ImageGlitch"
import Activate from "./assets/scripts/Activate"

//Stylesheet
import "./assets/styles/styles.sass"

//Contexts & Reducer
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Reducer from "./Reducer"

//Components
import Header from "./components/Header"
import Top from "./components/Top"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import OverlayMenu from "./components/OverlayMenu"

function Main() {
  const initialState = {
    section: "top",
    showHeader: false,
    showFooter: false,
    size: "tiny",
    menuOpen: false
  }

  const [state, dispatch] = useImmerReducer(Reducer, initialState)

  useEffect(() => {
    setInterval(() => {
      const color = Color(ThemeColor.color.string())
      document.documentElement.style.setProperty("--themeColor", color.darken(0.5))
      document.documentElement.style.setProperty("--themeColor50", color.fade(0.5))
      document.documentElement.style.setProperty("--themeColor75", color.fade(0.75))
      document.documentElement.style.setProperty("--themeColorLight", color.lightness(31.25))
    }, 50)

    new Matrix()
    new ImageGlitch(75)
    new Activate(".project__text", 75)
    new Activate(".fade-in", 75)
    scrollHandler()
    checkMenu()

    window.addEventListener("scroll", throttle(scrollHandler, 250))
  }, [state.size])

  useEffect(() => {
    window.addEventListener("resize", debounce(setWidth, 100))
    setWidth()

    return () => window.removeEventListener("resize", setWidth)
  }, [])

  useEffect(() => {
    if (state.menuOpen) {
      document.querySelector("body").classList.add("noscroll")
    } else {
      document.querySelector("body").classList.remove("noscroll")
    }
  }, [state.menuOpen])

  function scrollHandler() {
    const scroll = window.scrollY
    const windowHeight = window.innerHeight
    const topMenu = document.querySelector(".top__menu").offsetTop + document.querySelector(".top__menu").offsetHeight
    const about = document.querySelector(".about").offsetTop
    const work = document.querySelector(".work").offsetTop
    const contact = document.querySelector(".contact").offsetTop

    if (scroll >= contact - windowHeight / 2) {
      dispatch({type: "setSection", data: "contact"})
    } else if (scroll >= work - windowHeight / 2) {
      dispatch({type: "setSection", data: "work"})
    } else if (scroll >= about - windowHeight / 2) {
      dispatch({type: "setSection", data: "about"})
    } else {
      dispatch({type: "setSection", data: "top"})
    }

    if (scroll >= topMenu) {
      dispatch({type: "showHeader", data: true})
    } else {
      dispatch({type: "showHeader", data: false})
    }

    if (window.innerHeight + scroll >= document.body.offsetHeight) {
      dispatch({type: "showFooter", data: true})
    } else {
      dispatch({type: "showFooter", data: false})
    }
  }

  function setWidth() {
    const w = window.innerWidth
    if (w < 360) {
      dispatch({type: "setSize", value: "tiny"})
    } else if (w >= 360 && w < 720) {
      dispatch({type: "setSize", value: "small"})
    } else if (w >= 720 && w < 1080) {
      dispatch({type: "setSize", value: "medium"})
    } else if (w >= 1080 && w < 1440) {
      dispatch({type: "setSize", value: "large"})
    } else if (w >= 1440) {
      dispatch({type: "setSize", value: "huge"})
    }
  }

  function checkMenu() {
    if (state.size == "huge") {
      dispatch({type: "closeMenu"})
    }
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Header />
        <Top />
        <About />
        <Work />
        <Contact />
        <Footer />
        <CSSTransition timeout={250} in={state.menuOpen} classNames="overlay" unmountOnExit>
          <OverlayMenu />
        </CSSTransition>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
