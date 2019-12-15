import React, { useState } from "react"
import Icon from "../lib/Icon"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/Footer.css"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import PartnerWithUs from "./PartnerWithUs"
import SingleViewPage from "./SingleViewPage"
// import GoogleMaps1 from "./GoogleMaps1"
// import GoogleMaps2 from "./GoogleMaps2"
import validator from "validator"
import { useUsers } from "../hooks"

function Footer() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [buttonError, setButtonError] = useState("")
  const { sendSubs } = useUsers()

  function handleSubmit(e) {
    e.preventDefault()

    let err = false

    if (email !== "") {
      if (!validator.isEmail(email)) {
        err = true
        setEmailError("Not a valid email")
      } else {
        setEmailError("")
      }
    } else {
      err = true
      setEmailError("Cannot be blank")
    }
    if (!err) {
      // err = true
      setButtonError("Thank you!")
    } else {
      setButtonError("")
    }
    if (!err) {
      sendSubs(email)
      setEmail("")
    } else {
    }
  }
  return (
    <footer className="footerWrapper">

      <div className="footerLinks">
        <h2>LINKS</h2>
        <Link to={"/AboutUs"}>About Us</Link>
        <Link to={"/ContactUs"}>Contact Us</Link>
        <Link to={"/PartnerWithUs"}>Partner With Us</Link>
        {/* <Link to={"/SingleViewPage"}>Single View Page</Link>
        <Link to={"/GoogleMaps1"}>Google Maps 1</Link> */}
        <br/>
      </div>

      <div className="footerAddress">
        <h2>ADDRESS</h2>
        <p>WeWork</p>
        <p>10845 Griffith Peak Dr</p>
        <p>Las Vegas, NV 89101</p>
        <br/>
      </div>

      <div className="footerPhone">
        <h2>CONTACT US</h2>
        <p>702-837-0309</p>
        <p>info@HHfindr.com</p>
        <br/>
      </div>

      <div className="footerSocial">
      <h2>SOCIAL</h2>
        <div className="socialWrapper">
          <a className="fb" href="https://www.facebook.com/Chilis/">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube"></i>
          </a>
          {/* <a href="https://www.yelp.com/login">
            <i className="fa fa-yelp"></i>
          </a>
          <a href="https://www.pinterest.com/login/">
            <i className="fa fa-pinterest"></i>
          </a> */}
        </div>
        <br/>
      </div>

      <div className="footerNewsletter">
        <h2>JOIN OUR NEWSLETTER</h2>
        <form className="subsForm" onSubmit={handleSubmit}>
        <div className="newsletterTop">
            <div className="emailRequired">
              Email address <span className="r">*</span> 
            </div>
            <div className="newsletterConfirmation">{emailError}{buttonError}</div>
          </div>
          <input
            className={emailError === "" ? "subsEmail" : "subsEmail"}
            onChange={element => setEmail(element.target.value)}
            value={email}
            type="email"
            placeholder=""
          />
          <button className="subsButton" type="submit" placeholder="Submit">
            Submit
          </button><br/>
        </form>
      </div>
    </footer>
  )
}
export default Footer
