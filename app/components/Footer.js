import React, {useContext} from "react"
import StateContext from "../StateContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-regular-svg-icons"

function Footer() {
  const appState = useContext(StateContext)

  return (
    <footer className="footer">
      <div className={`footer__oct ${appState.showFooter ? "footer__oct--active" : ""}`}>
        <FontAwesomeIcon icon={faCopyright} className="footer__copy" /> {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
