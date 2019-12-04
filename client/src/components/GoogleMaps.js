import React, { Component, useState} from 'react';
import { useAuth } from '../hooks';
import { useAdmins } from '../hooks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
import "../styles/GoogleMaps.css"
// import assets

// Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.158470,
      lng: -115.152490
    },
    zoom: 15
  };
 
  render() {
    return (

      <div className="mapsMainContainer">

        <div className="Map1" style={{ height: '400px', width: '400px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

        <div className="Map2">
            <iframe
                width="400px"
                height="400px"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk&q=WeWork,Las+Vegas,NV"
                // allowfullscreen
            >
            </iframe>
        </div>

      </div>

    );
  }
}
 
export default SimpleMap;


    // <script>
    //     function myMap() {
    //         var mapProp= {
    //         center:new google.maps.LatLng(36.156890,-115.321400),
    //         zoom:5,
    //         };
    //         var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    //     }
    // </script>
    // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk&callback=myMap"></script>
 