import React from "react"
import "../styles/Main.css"
import MainBanner from "./Main-Banner"
import Slider from "../components/Slider"
import Slider2 from "../components/Slider2"
import Test3 from "../components/Test3"
// import GoogleMaps1 from "./GoogleMaps1"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

function Main() {
  return (
    <div className="mainContainer">
      <MainBanner />
      <Slider />
      <Slider2 />
      <Test3 />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Main