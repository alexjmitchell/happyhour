import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import PropTypes from 'prop-types';
import {useMaps} from "../hooks"
import {useCompanies} from "../hooks"


import I from "../lib/Icon"
import Placesmarker from './Markers';

// const [location, setCurrentLoc]=useState('')
let loc=null
// const iconStyle = {  
//   borderRadius: '50px',  
//   boxShadow: '3px 3px 1px #888888',
//   color:'red'
// } 

// const boxStyle = {
//   zIndex: '100',
//   border: 'solid 1px black',
//   backgroundColor: 'white',
//   padding: '10px',
//   width: '150px',
//   borderRadius: '10px'
// }



// const AnyReactComponent = ({text}) => {  
//  return(
//     <div>
//       <I icon="circle" 
//       //  color='blue' 
//        size='big' 
//        style={iconStyle}
//       />      
//       {text} 
//      </div> 
//   )
// }




 















// const AnyReactComponent = ({ text }) =>

// <div style={{
//         color: 'white', 
//         width:'100px',
//         background: 'grey',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
    
// }}>

// <div onClick={e=>setClick(!clicked)}>
//   <img />

// </div>

//     {text}
    
    
// </div>;

// const handleApiLoaded = (map, maps) => {
//   // use map and maps objects
// };


export default props => {
  const {coordinates} = useMaps()
  const { companies } = useCompanies()


  const [clicked,setClick]=useState(false)
  const [currentPlace,setCurrentPlace]=useState({})
  const mycoords = [{
    lat:36.1565688,
    lng:-115.155639
  },
  {
    lat:36.1566877,
    lng:-115.156079
  },
  {
    lat:36.1586624,
    lng:-115.1550877
  },
  {
    lat:36.158437,
    lng:-115.1533897
  },
  {
    lat:36.1594395,
    lng:115.1544107
  },


]

console.log(clicked + " clicked or not")

const AnyReactComponent = ({ text }) => (

<div className="pinContainer" onClick={e=>handleOnClick(e,text)} style={{
        // color: 'white', 
        // width:'55px',
        // background: 'pink',
        // padding: '15px 10px',
        // display: 'inline-flex',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: '100%',
        // transform: 'translate(-50%, -50%)'
    
}}>
<img className="pinImg" src="http://pngimg.com/uploads/mouth_smile/mouth_smile_PNG27.png" />
{/* <div className={clicked ? "showpindesc": ""} >
  

</div> */}

    {/* {text} */}
    
    
</div>
)




let count=0
  // const [hover, setHover]=useState(false)
//   const hover=false
  function handleOnClick (e,index) {
    setClick(!clicked)

    console.log(clicked + " al entrar en el click")
    
console.log (count, index, "tri")
console.log(currentPlace.name)
console.log(companies[index].companyname)
   



console.log(clicked + " despues del if")
  setCurrentPlace({
    name: companies[index].companyname,
    address:companies[index].address,
    phone:companies[index].phone

    // lat:places[index].geometry.location.lat,
    // lng:places[index].geometry.location.lng

  })
  

  const oldIndex=index

console.log(e.target.x + " what4ever")
  
  }


//   const placesMarkers = mycoords.map((place, index) => {
//     if (place.lat === null || place.lng === null){
//       return null
//     } else{
//       return <Placesmarker 
//       style={{width: '50px', height: '50px'}} 
//       key={index} 
//       // onChildMouseEnter={onChildMouseEnter} 
//       // onChildMouseLeave={this.onChildMouseLeave} 
//       place={place} 
//       hover={hover}
//      // onClick={e=>handleOnClick(e,index)}
//       lat={place.lat} 
//       lng={place.lng} 
//       text={place.lng}
//       />
//     }
//   })

  

  // function onChildMouseEnter (num, childProps) {
  //   if (childProps.place === undefined){
  //     return null
  //   } else {
  //     this.setState({
  //       place: childProps.place.name,
  //       lat: childProps.lat,
  //       lng: childProps.lng,
  //       hover: true
  //     })
  //   }
  // }


  // function onChildMouseLeave (num, childProps)  {
  //   console.log("leaving")
  //   if (childProps.place === undefined){
  //     return null
  //   } else {

  //     this.setState({
  //       lat: "",
  //       lng: "",
  //       hover: false
  //     })
  //   }
  // }





 // getLocs(coordinates)
//  places.map(p=> console.log(p.name + " name"))
  
  console.log(parseFloat(Number(coordinates.lat).toFixed(2)))
  // console.log(center)
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '800px', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key:"AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk",
              libraries: ['places','directions']
        }}
        defaultCenter={ {lat:36.16, lng:115.15}}
        center={coordinates}
        defaultZoom={15}
>


          {companies.map((p,i)=> 
            
            <AnyReactComponent
            key={i}
          lat={Number(p.lat)} 
          lng={Number(p.lng)}
          showballon={4}
          text={i} 
          
          />
            
            )}

        {clicked ?
          <div className="showpindesc" >
            
        <p>{currentPlace.name}</p>
        <p>{currentPlace.address}</p>
        <p>{currentPlace.phone}</p>
       </div>
      : ""}


  

        {/* // onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}

        // zoom={setZoom}
        // onChildMouseEnter={this.onChildMouseEnter}
        // onChildMouseLeave={this.onChildMouseLeave}
        > */}
        {/* {placesMarkers}        */}
   {/* <CurrentPin
              lat={this.props.current.lat}
              lng={this.props.current.lng}
              text={'You'}
              />
            {infoBox}
            {this.props.currentFacilityPosition === "" && this.props.currentFacilityZoom === ""
              ? null
              : <Button onClick={this.removeCenterAndZoom} style={{float: 'left', backgroundColor: 'AliceBlue', margin: '5px', border: 'solid 1px black', fontSize: '100%', boxShadow: '3px 3px 1px #888888'}}><Icon className="compass" size="large" />re-center</Button>

            }


        > */}
          {/* {places.map(p=> 
            
            <AnyReactComponent
          lat={p.geometry.location.lat} 
          lng={p.geometry.location.lng} 
          showballon={4}
          text={p.name} 
          
          />
            
            )}
           */}


        </GoogleMapReact>
      </div>
    )
  }









