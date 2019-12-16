import React, { useState} from 'react';
import { useAuth } from '../hooks';
import { useAdmins } from '../hooks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
import "../styles/AboutUs.css"
// import assets
import DaniloPic from "../assets/ipa.jpg"
import AinhoaPic from "../assets/foosballqueen.jpg"
import LazPic from "../assets/teamMember1.jpg"

export default props => {
const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [loginmatch, setLoginmatch]=useState(true);
const { signin } = useAuth();
const { getone } = useAdmins ();

    return (
        <div className="aboutUsMainContainer">
            <Header/>
            <div className="aboutUsStoryContainer">
                <div className="aboutUsStoryWrapper">
                    <h1>Our Story</h1>
                    <h2>Our Mission</h2>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img
                            src={DaniloPic}
                            alt="Picture of Danilo Nikolic"
                            style={{
                            display: "block",
                            width: "100%",
                            height: "100%"
                            }}
                        />
                        <div className="container">
                            <h2>Danilo Nikolic</h2>
                            <p className="title">CEO &amp; Founder</p>
                            <p>All-around great guy who loves IPA's</p>
                            <p>Danilo@hhf.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img
                            src={AinhoaPic}
                            alt="Picture of Ainhoa Martinez"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "100%"
                            }}
                        />
                        <div className="container">
                            <h2>Ainhoa Martinez</h2>
                            <p className="title">Art Director</p>
                            <p>Queen of the foosball table.  Favorite team: Atletico Madrid!</p>
                            <p>Ainhoa@hhf.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img
                            src={LazPic}
                            alt="Picture of Steve Lazarus"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "100%"
                            }}
                        />
                        <div className="container">
                            <h2>Steve Lazarus</h2>
                            <p className="title">Designer</p>
                            <p>You want to do what? And how are we going to make money at that?</p>
                            <p>Laz@hhf.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}