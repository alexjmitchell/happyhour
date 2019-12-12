import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import GoogleMapReact from "google-map-react"
// import internal links
// import stylesheet
import "../styles/GoogleMaps1.css"
// import assets

// Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

const AnyReactComponent = ({ text }) => <div>{text}</div>

class GoogleMaps1 extends Component {
//   static defaultProps = {
//     center: { lat: 36.15847, lng: -115.15249 },
//     zoom: 15
//   }

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

              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8-0pEYjDyIARB4jQJR4xnxs&q=place_id:ChIJSUIolZHDyIAR3ptYIczTgTs&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">

              {/* // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk
              // &q=WeWork,Las+Vegas,NV"
            // src=" https://www.google.com/maps/embed?36.1517458,-115.27189310000001"
            // src="https://www.google.com/maps/embed/v1/search?q=bar%2C%20tapas%2C%20restaurant%20near%20me%89104&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"



            
            // src="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.1517458,-115.27189310000001&radius=1500&type=restaurant&keyword=happy&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"

            //  src="https://www.google.com/maps/embed/v1/search?q=bar+taverns+restaurants&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"> */}
              allowFullScreen
          >
          </iframe>

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
    )
  }
}

export default GoogleMaps1
