import React from "react"
import "../styles/Maincss.css"
import Icon from "../lib/Icon"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className="footerwrap">
        <div>Partnership With Us</div>
        <div className="iconf">
          <Link to="/Facebook">
            <Icon icon="facebook-square" />
          </Link>
          <a href="https://en-gb.facebook.com/login/">
            {" "}
            <Icon icon="facebook-square" />
          </a>
        </div>
        <div className="iconc">
          <Icon icon="camera" />
        </div>
        <div className="icont">
          <Icon icon="twitter" />
        </div>
      </footer>
    </div>
  )
}
export default Footer
