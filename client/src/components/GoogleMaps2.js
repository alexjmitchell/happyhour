// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import GoogleMapReact from 'google-map-react';
// // import internal links
// import Header from "./Header";
// import Footer from "./Footer";
// // import stylesheet
// // import assets

// // Our API key: AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class GoogleMaps2 extends Component {
//   static defaultProps = {
//     center: {
//       lat: 36.158470,
//       lng: -115.152490
//     },
//     zoom: 15
//   };
 
//   render() {
//     return (

//       <div className="mapsMainContainer">

//         <Route path="/" component={Header}></Route>

//         <div className="Map1" style={{ height: '400px', width: '400px' }}>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: "AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk"}}
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//           >
//             <AnyReactComponent
//               lat={59.955413}
//               lng={30.337844}
//               text="My Marker"
//             />
//           </GoogleMapReact>
//         </div>

//         <Route path="/" component={Footer}></Route>

//       </div>

//     );
//   }
// }
 
// export default GoogleMaps2; 