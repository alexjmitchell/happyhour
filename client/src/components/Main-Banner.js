import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/Main-Banner.css"
import Register from "./Register"
import Logiin from "./Login"
import logo from "../assets/hhlogo3.png"

function Banner() {
  return (

    <div className="banner">
        <div className="bannerTop">
          <div className="bannerLogo">HHFindr.com</div>
          <div className="nav">
            <Link className="bannerSignUp" to={'/Register'}>Sign Up</Link>       
            <Link className="bannerLogIn" to={'/Login'}>Log In</Link>
          </div>
        </div>
        <div className="bannerBottom">
          <div className="bannerMessage">Find Your Favorite Happy Hour</div>
          <div className="bannerTagLine">Because it's just not the same without YOU!</div>
        </div>

    </div>

  )
}
export default Banner


