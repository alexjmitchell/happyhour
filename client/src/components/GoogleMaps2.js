
// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import GoogleMapReact from 'google-map-react';
// // // import internal links
// // import Header from "./Header";
// // import Footer from "./Footer";
// // // import stylesheet
// // // import assets

// // // Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

// import React, {Component} from "react"
// import ReactGoogleMapLoader from "react-google-maps-loader"
// import ReactGooglePlacesSuggest from "react-google-places-suggest"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const MY_API_KEY = "AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"
// export default class GoogleSuggest extends React.Component {
//     state = {
//         search: "",
//         value: "",
//     }

//     handleInputChange = e => {
//         this.setState({search: e.target.value, value: e.target.value})
//     }


 
//     handleInputChange = e => {
//         this.setState({search: e.target.value, value: e.target.value})
//     }
 
//     handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
//         console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
//         this.setState({search: "", value: geocodedPrediction.formatted_address})
//     }

//     handleNoResult = () => {
//         console.log('No results for ', this.state.search)
//     }

//     handleStatusUpdate = (status) => {
//         console.log(status)
//     }


    
//     handleNoResult = () => {
//         console.log('No results for ', this.state.search)
//     }
 
//     handleStatusUpdate = (status) => {
//         console.log(status)
//     }
 
//     render() {
//         const {search, value} = this.state
//         return (
//             <ReactGoogleMapLoader
//                 params={{
//                     key: MY_API_KEY,
//                     libraries: "places,geocode",
//                 }}
//                 render={googleMaps =>
//                     googleMaps && (
//                         <ReactGooglePlacesSuggest
//                             googleMaps={googleMaps}
//                             autocompletionRequest={{
//                                 input: search,
//                                 // Optional options
//                                 // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
//                             }}
//                             // Optional props
//                             onNoResult={this.handleNoResult}
//                             onSelectSuggest={this.handleSelectSuggest}
//                             onStatusUpdate={this.handleStatusUpdate}
//                             textNoResults="My custom no results text" // null or "" if you want to disable the no results item
//                             customRender={prediction => (
//                                 <div className="customWrapper">
//                                     {prediction
//                                         ? prediction.description
//                                         : "My custom no results text"}
//                                 </div>
//                             )}
//                         >
//                             <input
//                                 type="text"
//                                 value={value}
//                                 placeholder="Search a location"
//                                 onChange={this.handleInputChange}
//                             />
//                         </ReactGooglePlacesSuggest>
//                     )
//                 }
//             />
//         )
//     }
// }






// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import GoogleMapReact from 'google-map-react';
// // import internal links
// // import stylesheet
// // import assets

// // Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// // class GoogleMaps2 extends Component {
// //   static defaultProps = {
// //     center: {
// //       lat: 36.158470,
// //       lng: -115.152490
// //     },
// //     zoom: 15
// //   };



 
// //   render() {
// //     return (

// //       <div className="mapsMainContainer">

// //         <Route path="/" component={Header}></Route>

// //         <div className="Map1" style={{ height: '400px', width: '400px' }}>
// //           <GoogleMapReact
// //             bootstrapURLKeys={{ key: "AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"}}
// //             defaultCenter={this.props.center}
// //             defaultZoom={this.props.zoom}
// //           >
// //             <AnyReactComponent
// //               lat={59.955413}
// //               lng={30.337844}
// //               text="My Marker"
// //             />
// //           </GoogleMapReact>
// //         </div>

// //         <Route path="/" component={Footer}></Route>

// //       </div>

// //     );
// //   }
// // }
 
// // export default GoogleMaps2; 

// // export default GoogleMaps2;

 
// // export default GoogleMaps2;

// export default GoogleMaps2;





//   // New Code A
// // var c = function(pos) {
// //   var lat = pos.coords.latitude
// //   var long = pos.coords.longitude
// //   var coords = lat + ', ' + long
// //   document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk?q='+ '&z=60&output=embed');
// // }
// // navigator.geolocation.getCurrentPosition(c);

// // Newer Code
// // var x = document.getElementById("demo");

// // }

// // function showPosition(position) {
// //   var latlon = position.coords.latitude + "," + position.coords.longitude;

// //   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
// //   "+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk";

// //   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// // }
