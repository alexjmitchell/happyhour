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
      {/* <div>
        <Route path="/" component={Header}></Route>
        <Route path="/" component={MainBaner}></Route>
      </div>
      <main className="mainwrap">
        <Router>
          <div>
            <Route path="/" component={Slider}></Route>
            <Route path="/" component={Footer}></Route>
          </div>
        </Router>
      </main> */}
      <Footer />
    </div>
  )
}

export default Main
