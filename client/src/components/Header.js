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

        <p>LOGIN/SIGN UP</p>
      </header>
    </div>
  )
}
export default Header
