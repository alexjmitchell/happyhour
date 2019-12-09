import React, { useState } from "react"
import "../styles/base.css"
import validator from "validator"
import { BrowserRouter as Router, Route, link } from "react-router-dom"
// import sub from "../components/Submitted"
import { Link } from "react-router-dom"
import { useUsers } from "../hooks"

function ContactForm(props) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState("")

  const [button, setButton] = useState("")
  const [buttonError, setButtonError] = useState("")

  const { sendF } = useUsers()

  function handleSubmit(e) {
    e.preventDefault()
    // props.history.push("/feedback") // this push is only for pushing to the other components,pages,fields. Not for the data post

    let err = false

    if (name !== "") {
      if (!validator.isAlpha(name)) {
        err = true
        setNameError("Must be a valid text")
      } else {
        setNameError("")
      }
    } else {
      err = true
      setNameError("Cannot be blank")
    }

    if (email !== "") {
      if (!validator.isEmail(email)) {
        err = true
        setEmailError("Must be a valid email")
      } else {
        setEmailError("")
      }
    } else {
      err = true
      setEmailError("Cannot be blank")
    }

    if (message === "") {
      err = true
      setMessageError("Cannot be blank")
    } else {
      setMessageError("")
    }

    if (!err) {
      // err = true
      setButtonError("Thank you for you Feedback. Message Sent")
    } else {
      setButtonError("Message Not Submited")
    }

    // sendF(message, email, name) // passing the function from ....(const sendF = (message, email, name) => {
    // return dispatch(sendFeedback(message, email, name)) from client/src/redux/ducks/users/index.js

    if (!err) {
      sendF(message, email, name)
      setName("") // clears the field after submiting.It Set them up as empty field again
      setEmail("")
      setMessage("")
    } else {
    }
  }
  return (
    <div className="mainForm">
      <div className="contactForm"> Your Feedback - All fields required</div>
      <br />
      <form onSubmit={handleSubmit} className="contactInputs">
        <div className="labelMain">
          <label className="nameF">Name </label>
          <label className="nameF">Email </label>
        </div>
        <div className="labelMain">
          <span className="emailF">{nameError}</span>
          <span className="emailF">{emailError}</span>
        </div>

        <br />
        <div className="mainNameEmailInputs">
          <input
            className={nameError === "" ? "" : "error"}
            onChange={element => setName(element.target.value)}
            value={name}
            type="text"
            placeholder="Danilo"
          ></input>
          <br />

          <input
            className={emailError === "" ? "" : "error"}
            onChange={element => setEmail(element.target.value)}
            value={email}
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <br />
        <div>
          <label>Message {messageError}</label>
          <br />
          <br />
          <input
            // className="messageInput"
            className={messageError === "" ? "da" : "da error"}
            onChange={element => setMessage(element.target.value)}
            value={message}
            type="text"
            placeholder="type your message"
          ></input>
        </div>
        <p></p>

        <p></p>
        <button className="mainbutton" type="submit" placeholder="Submit">
          Submit
        </button>
        <p>{buttonError}</p>
        <br />
      </form>
    </div>
  )
}

export default ContactForm
