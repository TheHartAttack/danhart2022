import React, {useEffect, useState} from "react"
import {useImmer} from "use-immer"
import Axios from "axios"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faSpinner} from "@fortawesome/free-solid-svg-icons"

function Contact() {
  const [state, setState] = useImmer({
    name: "",
    email: "",
    message: "",
    submitting: false,
    submitCount: 0,
    status: ""
  })

  useEffect(() => {
    if (state.submitCount) {
      async function submitMessage() {
        try {
          if (!state.name) {
            throw new Error("You must provide a name.")
          }
          if (!state.email) {
            throw new Error("You must provide an email.")
          }
          if (!state.message) {
            throw new Error("You must provide a message.")
          }

          setState(draft => {
            draft.submitting = true
          })

          const form = new FormData()
          form.append("name", state.name)
          form.append("email", state.email)
          form.append("message", state.message)
          const response = await Axios.post("/contact.php", form, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })

          if (response.status == 200) {
            setState(draft => {
              draft.name = ""
              draft.email = ""
              draft.message = ""
              draft.submitting = false
              draft.status = "Message sent."
            })
          } else {
            throw new Error("Server error.")
          }
        } catch (e) {
          setState(draft => {
            draft.submitting = false
            draft.status = e.message
          })
          console.log(e)
        }
      }
      submitMessage()
    }
  }, [state.submitCount])

  useEffect(() => {
    if (state.status) {
      setTimeout(() => {
        setState(draft => {
          draft.status = ""
        })
      }, 5250)
    }
  }, [state.status])

  async function handleSubmit(e) {
    e.preventDefault()
    setState(draft => {
      draft.submitCount++
    })
  }

  return (
    <section className="section contact">
      <form onSubmit={handleSubmit} className="contact__form">
        <p className="contact__text">If you’re interested in working with me, please send me an email using the form below.</p>

        <div className="contact__group">
          <label htmlFor="contact-name">Name</label>
          <input
            onChange={e => {
              setState(draft => {
                draft.name = e.target.value
              })
            }}
            type="text"
            id="contact-name"
            className="contact__input"
            value={state.name}
          />
        </div>

        <div className="contact__group">
          <label htmlFor="contact-email">Email</label>
          <input
            onChange={e => {
              setState(draft => {
                draft.email = e.target.value
              })
            }}
            type="text"
            id="contact-email"
            className="contact__input"
            value={state.email}
          />
        </div>

        <div className="contact__group">
          <label htmlFor="contact-message">Message</label>
          <textarea
            onChange={e => {
              setState(draft => {
                draft.message = e.target.value
              })
            }}
            type="text"
            id="contact-message"
            className="contact__textarea"
            value={state.message}
          ></textarea>
        </div>

        <div className="contact__group contact__group--submit">
          <button className="button contact__submit" disabled={state.submitting}>
            <span>Send</span>

            <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />

            <FontAwesomeIcon icon={faSpinner} className="contact__submitting" />
          </button>

          {state.status && <span className="contact__status">{state.status}</span>}
        </div>
      </form>
      <div className="contact__map"></div>
    </section>
  )
}

export default Contact
