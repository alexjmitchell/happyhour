import React from "react"
import "../styles/Maincss.css"
import Icon from "../lib/Icon"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/footer.css"


function Footer() {
  return (
    <div>
      <footer className="footerwrap">
        <div className="media">
          <ul className="social">
            <div>Partnership With Us</div>
            <li className="fb">
              <a href="https://www.facebook.com/Chilis/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>{" "}
            <li className="rss">
              <a href="https://www.instagram.com/accounts/login/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
            </li>{" "}
            <li className="tw">
              <a href="https://twitter.com/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>{" "}
            <li className="yt">
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube"></i>
              </a>
            </li>{" "}
            <li className="yelp">
              <a href="https://www.yelp.com/login">
                <i className="fa fa-yelp"></i>
              </a>
            </li>{" "}
            <li className="pint">
              <a href="https://www.pinterest.com/login/">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>

        </div>


      </footer>
    </div>
  )
}
export default Footer
