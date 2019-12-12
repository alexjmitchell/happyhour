import React, {useState} from 'react'
import I from "../lib/Icon"

// const markerStyle={
//   borderRadius: '50px',
// //   transform: 'matrix(-1, 0, 0, 1, 10, 0)',

// }
export default props => {
    const [clicked,setClick]=useState(false)

    return(
      <div className="pinContainer" onClick={e=>setClick(!clicked)}>

        <img className="imgPin"/>
        <div className={clicked ? "showpin": ""}>
        <p>{}</p>
        <p>working on this data</p>
        <p></p>
        </div>



      </div>
    )
}
