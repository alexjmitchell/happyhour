import React, { useState} from 'react';
import { useAuth } from '../hooks';
import { useAdmins } from '../hooks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
import "../styles/ContactUs.css"
// import assets
import ResearchPic from "../assets/research.jpg"


export default props => {
const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [loginmatch, setLoginmatch]=useState(true);
const { signin } = useAuth();
const { getone } = useAdmins ();

    return (

        <div>
        </div>


        // <div className="contactUsMainContainer">

        //     <Route path="/" component={Header}></Route>

        //     <div className="contactUsBanner">

        //         <div className="contactUsInfo">
        //             <p id="phone">📞 702-560-5326</p>
        //             <p id="emailBanner">📧 gethappy@hhflv.com</p>
        //         </div>

        //         <div className="GoogleMaps">
        //             <div className="GoogleMapsWrapper">
        //                 {/* <iframe
        //                     width="100%"
        //                     height="200px"
        //                     frameborder="0"
        //                     style="border:0"
        //                     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk&q=WeWork,Las+Vegas,NV"
        //                     allowfullscreen>
        //                 </iframe>                         */}
        //             </div>
        //         </div>

        //         {/* <div className="contactUsMain">

        //             {/* <div className="formContainer">

        //                 <form class="contactUsForm" action="/action_page.php" method="get">
        //                     <p id="contactUsTitle">How can we help?</p>
        //                     <div class="upperWrapper">
        //                         <div class="nameContainer">
        //                             <div class="fnameContainer">
        //                                 <p>First Name</p>
        //                                 {/* <input type="text" name="fname" id="fname" placeholder="First Name"><br> */}
        //                                 <input type="text" value={this.state.value} onChange={this.handleChange} />
        //                             </div>
        //                             <div class="lnameContainer">
        //                                 <p>Last Name</p>
        //                                 {/* <input type="text" name="lname" id="lname" placeholder="Last Name"><br> */}
        //                                 <input type="text" value={this.state.value} onChange={this.handleChange} />                        
        //                             </div>
        //                         </div>

        //                         <div class="emailCompanyContainer">
        //                             <div class="emailContainer">
        //                                 <p>Email</p>
        //                                 {/* <input type="email" name="email" id="email" placeholder="Email"><br> */}
        //                                 <input type="text" value={this.state.value} onChange={this.handleChange} />                                
        //                             </div>
        //                             <div class="companyContainer">
        //                                 <p>Comapny</p>
        //                                 {/* <input type="text" name="comapny" id="company" placeholder="Company"><br> */}
        //                                 <input type="text" value={this.state.value} onChange={this.handleChange} />                                
        //                             </div>
        //                         </div>                            
        //                     </div>
                            
        //                     <div class="lowerWrapper">
        //                         <div class="messageContainer">
        //                             <label>
        //                                 Essay:
        //                                 <textarea id="message" value={this.state.value} onChange={this.handleChange} />
        //                             </label>

        //                         </div>
        //                     </div>

        //                     <input class="submitButton" type="submit" value="Submit" />
        //                 </form>
        //             </div> */}
        //         </div> */}

        //         <div className="officeContainer">
        //             <div className="textPicWrapper">
        //                 <p id="visitUs">Come visit us at WeWork!</p>
        //                 <p id="officeName">happyhourfinderlv.com</p>
        //                 <p id="address1">10845 Griffith Peak Dr #2</p>
        //                 <p id="address2">Las Vegas, NV 89135</p>
        //                 <img
        //                     id="wework"
        //                     src={ResearchPic}
        //                     alt="Office"
        //                     data-action="our link"
        //                     style={{
        //                     display: "block",
        //                     width: "70%",
        //                     height: "45%"
        //                     }}
        //                 />
        //                 <p id="mktResearch">( We're probably doing market research right now )</p>
        //             </div>
        //         </div>

        //     </div>

        //     <Route path="/" component={Footer}></Route>

        // </div> 

    )
}