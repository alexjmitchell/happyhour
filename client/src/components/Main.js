import React from "react";
import "../styles/Maincss.css";
import Slider from "../components/Slider.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Liked from "./Liked";
import { useUsers } from "../hooks";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  const { users } = useUsers();
  return (
    <div>
      <div>
        <Route path="/" component={Header}></Route>
      </div>
      <main className="mainwrap">
        <Router>
          <div>
            <Route path="/" component={Slider}></Route>
            <Route path="/liked" component={Liked}></Route>
            <Route path="/" component={Footer}></Route>
          </div>
        </Router>
      </main>
      <div>
        {/* <div className="container">
          {users.map((user, i) => (
            <div key={i}>
              <p>Name: {user.picture}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Main;
