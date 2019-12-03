import React from "react";
import "../styles/Maincss.css";
import Icon from "../lib/Icon";

function Header() {
  return (
    <div>
      <header className="Header">
        <p>LOGO</p>
        <p>ABOUT US</p>
        <p>CONTACT</p>
        <div className="iconf">
          <Icon icon="facebook-square" />
        </div>
        <div className="iconc">
          <Icon icon="camera" />
        </div>
        <div className="icont">
          <Icon icon="twitter" />
        </div>
        <p>LOGIN/SIGN UP</p>
      </header>
      
    </div>
  );
}
export default Header;
