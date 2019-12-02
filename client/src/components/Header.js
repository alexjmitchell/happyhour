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
      <div className="ban">
        <img
          className="picleft"
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
        />
        BANER <br />
        blaaaaaaaadsadsadsadsadsadass
        <br />
        blaaaaaaaaaaaaaaaaaaaaaaaaaa
        <br />
        blaaaaaaaadaddadadadadaddadada
        <img
          className="picleft"
          src="https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?cs=srgb&dl=people-sitting-beside-table-1679825.jpg&fm=jpg"
        />
      </div>
    </div>
  );
}
export default Header;
