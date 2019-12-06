import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
// import internal links
// import stylesheet
import "../styles/GoogleMaps1.css"
// import assets

// Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps1 extends Component {
  static defaultProps = {
    center: {lat: 36.158470,lng: -115.152490},
    zoom: 15
  };
 
  render() {
    return (

      <div className="GoogleMaps1MainContainer">

        <div className="mapTopBar">
          <h1>HERE ARE THE HAPPY HOURS NEAR YOU</h1>
        </div>

        <iframe
              id="theMap"
              width="80%"
              height="800px"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk
              &q=WeWork,Las+Vegas,NV"
              allowFullScreen
          >
          </iframe>

          <div className="searchText">
            <h2>LET'S FIND WHAT YOU'RE LOOKING FOR</h2>
            <p>Search by keywords, location, or radius</p>
          </div>

          <div className="searchItems">
            <div className="keywordSearch">
              <p>Enter Keywords</p>
            </div>

            <div className="keywordSearch">
              <p>Enter Address</p>
            </div>

            <div className="keywordSearch">
              <p>Miles</p>
            </div>

            <div className="keywordSearch">
              <p>SUBMIT</p>
            </div>

          </div>

      </div>

    );
  }
}
 
export default GoogleMaps1;