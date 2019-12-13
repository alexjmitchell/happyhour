
import React, { useState } from "react"
import { useAuth } from "../hooks"
import { useAdmins } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import GoogleMapReact from 'google-map-react';
import GoogleMaps1 from "./GoogleMaps1"
import "../styles/ContactUs.css"
import ResearchPic from "../assets/research.jpg"

export default props => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginmatch, setLoginmatch] = useState(true)
  const { signin } = useAuth()
  const { getone } = useAdmins()

  return (
    <div className="contactUsMainContainer">
      <Route path="/" component={Header}></Route>

      <div className="contactUsBanner">
        <div className="contactUsInfo">
          <p id="phone">📞 702-560-5326</p>
          <p id="emailBanner">📧 gethappy@hhflv.com</p>
        </div>

        <div className="GoogleMaps"></div>

        <div className="contactUsMain">
          <div className="formContainer">
            {/* 
                        <form>

                        </form> */}
          </div>
        </div>

        <div className="officeContainer">
          <div className="textPicWrapper">
            <p id="visitUs">Come visit us at WeWork!</p>
            <p id="officeName">happyhourfinderlv.com</p>
            <p id="address1">10845 Griffith Peak Dr #2</p>
            <p id="address2">Las Vegas, NV 89135</p>
            <img
              id="wework"
              src={ResearchPic}
              alt="Office"
              data-action="our link"
              style={{
                display: "block",
                width: "100%",
                height: "45%"
              }}
            />
            <p id="mktResearch">
              ( We're probably doing market research right now )
            </p>
          </div>
        </div>
      </div>

      <Route path="/" component={Footer}></Route>
    </div>
  )
}
