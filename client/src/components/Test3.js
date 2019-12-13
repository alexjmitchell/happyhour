import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import PropTypes from 'prop-types';
import {useMaps} from "../hooks"
import {useCompanies} from "../hooks"



import I from "../lib/Icon"
import Placesmarker from './Markers';

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
    <img className="pinImg" src="http://pngimg.com/uploads/mouth_smile/mouth_smile_PNG27.png" />
  </div>
  )

  let count=0
  function handleOnClick (e,index) {
    setClick(!clicked)
    setX(e.target.x - 350)
    setY(e.target.y - 400)
    console.log(e.target.width, "googlereact")
const x = e.target.x
const y = e.target.y
const t = e.target.coordinates
const wi = e.target.width
console.log(x,y, "x y")
console.log(wi, " wi")
console.log(t, " coordinates t")
    console.log(clicked + " al entrar en el click") 
    console.log (count, index, "tri")
    console.log(currentPlace.name)
    console.log(companies[index].companyname)
    console.log(clicked + " despues del if")
    setCurrentPlace({
      name: companies[index].companyname,
      address:companies[index].address,
      phone:companies[index].phone
  })
  const oldIndex=index
  console.log(e.target.x + " what4ever")
  }


function handleMouseLeave(){
  setHover(!hover)
  
}

  function handleMouseOver(num,childprop){
console.log("holi")
console.log(num,childprop, "WTF")
    setHover(!hover)
    setCurrentPlace({
    
      name: companies[childprop["text"]].companyname,
      address:companies[num].address,
      phone:companies[num].phone
      
  })
  }

 
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
{/* quitar despues de styling */}
          <AnyReactComponent
              key={9}
              lat={35} 
              lng={-115}
              showballon={4}
              text={7} 
            />
            <AnyReactComponent
              key={3}
              lat={25} 
              lng={-15}
              showballon={4}
              text={6} 
            />


{/* quitar despues de styling */}
        {clicked || hover ?
          < div className="showpindesc" style=
          {{
            left:posX,
            top:posY
          }}> 
              <p>{currentPlace.name}</p>
              <p>{currentPlace.address}</p>
              <p>{currentPlace.phone}</p>
          </div>
        : ""}

        </GoogleMapReact>
      </div>
    )
  }









