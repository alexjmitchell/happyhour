import React from "react";
import "../styles/Header.css";
import Icon from "../lib/Icon";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="Header">
        <Link className="house" to={'/'}><Icon icon="home"/></Link>
        <div className="topRight">
          {/* <p className="headerToLogin"> <Link to="/register">Create Account</Link></p>
          <p className="headerToReg"><Link to="/login">Log In</Link></p>           */}
        </div>
      </header>
    </div>
  )
}
export default Header
