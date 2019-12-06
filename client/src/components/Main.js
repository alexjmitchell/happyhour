import React from "react"
import "../styles/Maincss.css"
import Slider from "../components/Slider.js"
// import Header from "./Header"
import Footer from "./Footer"
import MainBanner from "./Main-Banner"
import GoogleMaps1 from "./GoogleMaps1"

function Main() {
  return (
    <div>

      <MainBanner />
      <Slider />
      <GoogleMaps1 />
      <Footer />
   
    </div>
  )
}

export default Main
