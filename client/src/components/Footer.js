import React from "react"
import "../styles/Maincss.css"
import Icon from "../lib/Icon"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import internal links
// import stylesheet
import "../styles/Footer.css"
// import assets

function Footer() {
  return (
    <div>
      <footer className="footerMainContainer">

        <div className="Nav1">
          <div><Link to={'/AboutUs'}>About Us</Link></div>
          <div><Link to={'/ContactUs'}>Contact Us</Link></div>
          <div><Link to={'/PartnerWithUs'}>Partner With Us</Link></div>
          <div><Link to={'/SingleViewPage'}>Single View Page</Link></div>
          <div><Link to={'/GoogleMaps2'}>GoogleMaps2</Link></div>
        </div>

        <div className="socialIcons">
        
          <div className="iconf">
            <Link to="/Facebook">
              <Icon icon="facebook-square" />
            </Link>
            <a href="https://en-gb.facebook.com/login/">
              {" "}
              <Icon icon="facebook-square" />
            </a>
          </div>
          <div className="iconc"><Icon icon="camera" /></div>
          <div className="icont"><Icon icon="twitter" /></div>        
        </div>


      </footer>
    </div>
  )
}
export default Footer
