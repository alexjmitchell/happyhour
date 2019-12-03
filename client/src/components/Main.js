import React from "react"
import "../styles/Maincss.css"
import Slider from "../components/Slider.js"
import Header from "./Header"
import Footer from "./Footer"
import MainBaner from "./Main-Baner"

function Main() {
  return (
    <div>
      <Header />
      <MainBaner />
      <Slider />
      
      <Footer />
   
    </div>
  )
}

export default Main
