import React from "react"
import "../styles/Maincss.css"
import Slider from "../components/Slider.js"
import Header from "./Header"
import Footer from "./Footer"
import MainBaner from "./Main-Baner"
import ContactForm from "./ContactForm"

function Main() {
  return (
    <div>
      <Header />
      <MainBaner />
      <Slider />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Main
