import React from "react"
import "../styles/Maincss.css"
import banerpic from "../assets/pic.webp"

function Baner() {
  return (
    <div>
      <div className="">
        <div className="ban">
          <img src={banerpic} />
        </div>
      </div>
    </div>
  )
}
export default Baner
