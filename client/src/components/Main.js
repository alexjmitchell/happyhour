import React from "react"
import "../styles/Main.css"
import MainBanner from "./Main-Banner"
import Slider from "../components/Slider.js"
import GoogleMaps1 from "./GoogleMaps1"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

function Main() {
  return (
    <div className="mainContainer">
      <MainBanner />
      <Slider />
      {/* <GoogleMaps1 /> */}
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Main
