import React, { useState } from "react"
import "../styles/ContactForm.css"
import validator from "validator"
import { BrowserRouter as Router, Route, link } from "react-router-dom"
// import sub from "../components/Submitted"
import { Link } from "react-router-dom"
import { useUsers } from "../hooks"
import dancing from "../assets/dancing.mp4"

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
      if (!validator.isAlpha(name) && 
      validator.isEmpty(name, { ignore_whitespace: true } )) {
        err = true
        setNameError("Must be a valid text")
      } else {
        setNameError("")
      }
    } else {
      err = true
      setNameError("required")
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
      setEmailError("required")
    }

    if (message === "") {
      err = true
      setMessageError("required")
    } else {
      setMessageError("")
    }

    if (!err) {
      // err = true
      setButtonError("Thank you for you Feedback.")
    } else {
      setButtonError("Please complete required fields")
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
      <div className="contactFormLeftSide">
        
      </div>

      <form onSubmit={handleSubmit}className="contactInputs">
      <div className="contactForm"> We'd love to hear from you!</div>

        <div className="contactTop">

          {/* Top Left Section */}
          <div className="contactTopLeft">
            <div className="nameTop">
              <div className="nameField">Name </div>
              <span className="nameFieldError">{nameError}</span>
            </div>
            <input
              className={nameError === "" ? "nameInputField" : "nameInputField"}
              onChange={element => setName(element.target.value)}
              value={name}
              type="text"
              placeholder=""
            />
          </div>

          {/* Top Right Section */}
          <div className="contactTopRight">
            <div className="emailTop">
              <div className="emailField">Email </div>
              <span className="emailFieldError">{emailError}</span>
            </div>
            <input
              className={emailError === "" ? "emailInputField" : "emailInputField"}
              onChange={element => setEmail(element.target.value)}
              value={email}
              type=""
              placeholder=""
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="messageContainer">
          <div className="messageTop">
            <div className="messageText">Message</div>
            <div className="messageFieldError">{messageError}</div>
          </div>
          <textarea
            className={messageError === "" ? "messageInputField" : "messageInputField"}
            onChange={element => setMessage(element.target.value)}
            value={message}
            type="text"
            placeholder=""
          ></textarea>
        </div>
        <button className="mainButton" type="submit" placeholder="Submit">
          Submit
        </button>
        <p className="contactConfirmation">{buttonError}</p>
      </form>
      
      <div className="contactPicRight">
        <div id="myVideoContainer">
          <video
            autoplay="true"
            loop="true"
            id="myVideo"
            src={dancing}
          ></video>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
