
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import PropTypes from 'prop-types';
import {useMaps} from "../hooks"
import {useCompanies} from "../hooks"
import I from "../lib/Icon"
import "../styles/Gmap.css"
import "../styles/base.css"



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

// const handleApiLoaded = (map, maps) => {
//   // use map and maps objects
// };

export default props => {
  const {coordinates} = useMaps()
  const { companies } = useCompanies()
  const [clicked,setClick]=useState(false)
  const [hover,setHover]=useState(false)
  const [posX, setX]=useState("")
  const [posY, setY]=useState('')

  const [currentPlace,setCurrentPlace]=useState({})
  console.log(clicked + " clicked or not")

  const AnyReactComponent = ({ text }) => (
  <div className="pinContainer" onClick={e=>handleOnClick(e,text)} >
    {/* <img className="pinImg" src="http://pngimg.com/uploads/mouth_smile/mouth_smile_PNG27.png" /> */}
  </div>
  )

  function handleOnClick (e,index) {
    setClick(!clicked)
    setX(e.target.x - 150)
    setY(e.target.y - 500)
    setCurrentPlace({
      name: companies[index].companyname,
      address:companies[index].address,
      phone:companies[index].phone,
      city:companies[index].city,
      state:companies[index].state,
      zip:companies[index].zip,
      hhdays:companies[index].hhdays,
      starthour:companies[index].starthour,
      endhour:companies[index].endhour,

  })
  }

function handleMouseLeave(){
  setHover(!hover)
  
}

  function handleMouseOver(num,childprop){

    setHover(!hover)
    setCurrentPlace({
    
      name: companies[childprop["text"]].companyname,
      address:companies[num].address,
      phone:companies[num].phone,
      city:companies[num].city,
      state:companies[num].state,
      zip:companies[num].zip,
      hhdays:companies[num].hhdays,
      starthour:companies[num].starthour,
      endhour:companies[num].endhour
  })
  }

  
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '800px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key:"AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk",
              libraries: ['places','directions']
            }}
          defaultCenter={ {lat:36.16, lng:115.15}}
          center={coordinates}
          defaultZoom={14}
          onChildMouseEnter={handleMouseOver}
          onChildMouseLeave={handleMouseLeave}
        >
        {companies.map((p,i)=> 
            <AnyReactComponent
              key={i}
              lat={Number(p.lat)} 
              lng={Number(p.lng)}
              showballon={true}
              text={i} 
            />
          )}

        {clicked || hover ?
          < div className="showpindesc" style=
          {{
            right:posX,
            top:posY
          }}> 
              <div className="cardImg"><img src="https://cdn.pixabay.com/photo/2017/12/29/16/58/background-3048067_960_720.jpg"/>
              </div>
              
              <div className="cardName">
                <h2>{currentPlace.name}</h2>
                <p><span className="cardBold"> Address: </span>{currentPlace.address},               {currentPlace.city}, {currentPlace.state} - {currentPlace.zip}</p>
                  <p><span className="cardBold"> Phone: </span>{currentPlace.phone}</p>
                  <p><span className="cardBold"> Happy hour days: </span> {currentPlace.hhdays}</p>
                  <p><span className="cardBold"> From: </span> {currentPlace.starthour >= 12? currentPlace.starthour==12? currentPlace.starthour + "pm": currentPlace.starthour - 12 + "pm": currentPlace.starthour + "am"} to {currentPlace.endhour >= 12? currentPlace.endhour==12? currentPlace.endhour + "pm": currentPlace.endhour - 12 + "pm": currentPlace.endhour + "am"}</p>
              </div>
                  
          </div>
        : ""}
        </GoogleMapReact>
      </div>
    )
  }









