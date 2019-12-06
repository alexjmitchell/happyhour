import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/Main-Banner.css"
import Register from "./Register"
import Logiin from "./Login"

function Banner() {
  return (
    <div className="banner">
      <div className="bannerLeftContainer">
        <div className="logo">Listo?</div>
        <div className="bannerMessage">Find Your Favorite Happy Hour</div>
        <div className="bannerTagLine">Because it's just not the same without YOU!</div>
      </div>
      <div className="nav">
        <Link className="bannerSignUp" to={'/Register'}>Sign Up</Link>       
        <Link className="bannerLogIn" to={'/Login'}>Log In</Link>
      </div>
    </div>
  )
}
export default Banner
