import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
// import assets

// Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMaps1 extends Component {
  static defaultProps = {
    center: {
      lat: 36.158470,
      lng: -115.152490
    },
    zoom: 15
  };
 
  render() {
    return (

        <div className="GoogleMaps1">
            <iframe
                width="400px"
                height="400px"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk&q=WeWork,Las+Vegas,NV"
                // allowfullscreen
            >
            </iframe>
        </div>

    );
  }
}
 
export default GoogleMaps1; 