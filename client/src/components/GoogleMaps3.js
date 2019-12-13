// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import GoogleMapReact from 'google-map-react';
// // import internal links
// // import stylesheet
// import "../styles/GoogleMaps3.css"
// // import assets

// // Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class GoogleMaps3 extends Component {
//   static defaultProps = {
//     center: {lat: 36.158470,lng: -115.152490},
//     zoom: 15
//   };
 
//   render() {

//      return (

//        <div className="GoogleMaps3MainContainer">

//              {/* Ainhoa: Please add code in the format  after ?q=near+{adfasdf}+{adsfafsd}+{asdfas} */}

//              <h3>Highlight a place or address - this example uses address</h3>
//              <p>Input: Enter a location</p>
//              <iframe width="600" height="450"
//                src="https://www.google.com/maps/embed/v1/place?q=1112%20S%20Casino%20Center%20Blvd%2C%20Las%20Vegas%2C%20NV%2089104
//                &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//              </iframe>"

//             <h3>Highlight a place or address - this example uses place</h3>
//              <p>Input: Enter a location</p>
//              <iframe width="600" height="450"
//                src="https://www.google.com/maps/embed/v1/place?q=Stratosphere%20Las%20Vegas
//                &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//              </iframe>

//              <h3>Show the results of a search</h3>
//              <p>Input: Enter a query</p>
//              <p>Below input box: For example, "restaurants near Bondi NSW"</p>
//              <iframe width="600" height="450"
//               src="https://www.google.com/maps/embed/v1/search?q=bars+taverns+restaurants+happy+hour+downtown+las+vegas
//               &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//              </iframe>

//              <h3>Show driving directions</h3>
//              <p>Above input box: Origin:</p>
//              <p>Input: Enter a location</p>
//              <p>Above input box: Destination:</p>
//              <p>Input: Enter a location</p>
//              <iframe width="600" height="450"
//                src="https://www.google.com/maps/embed/v1/directions?origin=stratosphere+las+vegas&destination=mandalay+bay+las+vegas
//                &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//              </iframe>
//             <h3>Geolocation</h3>
//             <iframe width="600" height="450"
//               src="https://www.googleapis.com/geolocation/v1/geolocate?
//               key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//             </iframe>"

//             {/* Ainhoa: Please add code in the format  after ?q=near+{adfasdf}+{adsfafsd}+{asdfas} */}

//              <h3>Show street view or a custom panorama - Example 'Enter a location'</h3>
//              <p>Above input box: Location:</p>
//              <p>Input: Enter a location</p>
//              <p>or</p>
//              <p>Input: Custom panorama ID:</p>
//              <p>Placeholder: Enter a panorma ID</p>
//              <p>Below input box: Providing both fields will fall back to the location if the panorama is unavailable.</p>
//              <iframe width="600" height="450"
//                src="https://www.google.com/maps/embed/v1/streetview?location=36.1584,-115.1525&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk">
//              </iframe>

//       </div>

//     );
//   }
// }

// export default GoogleMaps3;
