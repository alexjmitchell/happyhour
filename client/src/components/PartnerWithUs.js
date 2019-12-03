import React, { useState} from 'react';
import { useAuth } from '../hooks';
import { useAdmins } from '../hooks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
import "../styles/PartnerWithUs.css"
// import assets
import Step1 from "../assets/step1.png"
import Step2 from "../assets/step2.png"
import Step3 from "../assets/step3.png"
import Step4 from "../assets/step4.png"
import Happy from "../assets/happy.jpg"
import Happier from "../assets/happier.jpg"
import Happiest from "../assets/happiest.png"

export default props => {
const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [loginmatch, setLoginmatch]=useState(true);
const { signin } = useAuth();
const { getone } = useAdmins ();

    return (

        <div class="partnerWithUsMainContainer">

            <Route path="/" component={Header}></Route>

            <div class="benefitsMainContainer">
                
                <div class="benefitsWrapper">
                    <div class="visitorBenefits">
                        <h1 id="visitorTitle">Visitor Benefits</h1>
                        <p>&#10004; Our visitors want fun, fast, easy, timely, and reliable information on what matters most to them:</p>
                        <div>
                            <p>What happy hours are close, convenient, and easy to get to?</p>
                            <p>What happy hour promotions are they most interested in?  Drink specials? Food specials?  Entertainment?  Other?</p><br></br>
                        </div>
                        <p>&#10008; What they don't want is to have to surf individual websites to find the information they're looking for.</p>                        
                    </div>

                    <div class="clientBenefits">
                        <h1 id="clientTitle">Client Benefits</h1>
                            <p>&#9733; Increase your brand's awareness through an innovative customer engagement experience</p>
                            <p>&#9728; Increase your revenue by attracting new customers</p>
                            <p>&#9745; Improve your marketing spend by knowing that every dollar goes directly toward your targeted audience</p>
                            <p>&#10031; Improve your ROI by continually tracking results and refining your offers</p>
                    </div>

                </div>

            </div>

            <div class="howItWorksMainContainer">

                <div class="howItWorksTitle">Here's How It Works</div>

                <div class="howItWorksWrapper">

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img
                                        src={Step1}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Sign Up</h1> 
                                    <p>Register and complete your initial profile (which we're are here to help you with</p> 
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img
                                        src={Step2}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Enter your promotion(s)</h1> 
                                    <p>Register and complete your initial profile (which we're are here to help you with</p> 
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img
                                        src={Step3}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Track Your Success</h1> 
                                    <p>Register and complete your initial profile (which we're are here to help you with</p> 
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img
                                        src={Step4}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Improve and Repeat</h1> 
                                    <p>Register and complete your initial profile (which we're are here to help you with</p> 
                                </div>
                            </div>
                        </div>

                </div>

            </div>

            <div class="pricingMainContainer">
                <h1 id="pricingTitle">Pricing</h1>
                <div class="pricingWrapper">

                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">y</span> Plan</h2>
                        <img
                            id="happyIcon"
                            src={Happy}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "15%",
                            height: "15%"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$20 per month after trial</p>
                        <p>Unlimited promotions</p>
                        <p>Graphic design</p>
                        <p>Content creation</p>
                        <p>Content management</p>
                        <p>Monthly Volume Reports</p>
                        <p>Google Analytics</p>
                        <p>Branding Options</p>
                        <p>Creating brand identity packages</p>
                        <p>Content creation and management</p>
                        <p>Training</p>
                        <p>Local Support!: 9-5, Mon-Fri, excludes holidays</p>
                        <input class="happyBtn" type="submit" value="Happy Button" />
                    </div>
                    
                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">ier</span> Plan</h2>
                        <img
                            id="happierIcon"
                            src={Happier}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "15%",
                            height: "15%"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$50 per month after trial</p>
                        <p>Unlimited promotions</p>
                        <p>Graphic design</p>
                        <p>Content creation</p>
                        <p>Content management</p>
                        <p>Monthly Volume Reports</p>
                        <p>Google Analytics</p>
                        <p>Branding Options</p>
                        <p>Creating brand identity packages</p>
                        <p>Content creation and management</p>
                        <p>Training</p>
                        <p>Local Support!: 9-5, Mon-Sun, excludes holidays</p>
                        <input class="happierBtn" type="submit" value="Happier Button" />
                    </div>
                    
                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">iest</span> Plan</h2>
                        <img
                            id="happiestIcon"
                            src={Happiest}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "15%",
                            height: "15%"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$100 per month after trial</p>
                        <p>Unlimited promotions</p>
                        <p>Graphic design</p>
                        <p>Content creation</p>
                        <p>Content management</p>
                        <p>Monthly Volume Reports</p>
                        <p>Google Analytics</p>
                        <p>Branding Options</p>
                        <p>Creating brand identity packages</p>
                        <p>Content creation and management</p>
                        <p>Training</p>
                        <p>Local Support!: Unlimited, 24/7</p>
                        <input class="happiestBtn" type="submit" value="Happiest Button" />
                    </div>

                </div>          
                <p class="pricingFooter"> * All rates are based on monthly subscription plans that can be cancelled at any time.</p> 
            </div>

            <Route path="/" component={Footer}></Route>

        </div>

    )
}