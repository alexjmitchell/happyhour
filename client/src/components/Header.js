import React from "react";
import "../styles/Maincss.css";
import Icon from "../lib/Icon";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="Header">
        <p>LOGO</p>
        <Link to={'/'}>Home</Link>
        <Link to={'/AboutUs'}>About Us</Link>
        <Link to={'/ContactUs'}>Contact Us</Link>
        <Link to={'/PartnerWithUs'}>Partner With Us</Link>
        <Link to={'/SingleViewPage'}>Single View Page</Link>
        <Link to={'/GoogleMaps'}>GoogleMaps</Link> 

        <p>LOGIN/SIGN UP</p>
      </header>
    </div>
  )
}
export default Header
