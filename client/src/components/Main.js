import React from "react"
import "../styles/Maincss.css"
import Slider from "../components/Slider.js"
import Slider2 from "../components/Slider2.js"
// import Header from "./Header"
import Footer from "./Footer"
import ContactForm from "./ContactForm"
import MainBanner from "./Main-Banner"
import GoogleMaps1 from "./GoogleMaps1"

function Main() {
  return (
    <div>
      <MainBanner />
      <Slider />
      <Slider2 />
      {/* <GoogleMaps1 /> */}
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Main
