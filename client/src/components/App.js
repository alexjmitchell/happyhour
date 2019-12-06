import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Login"
import Maintest from "./Maintest"
import Main from "./Main"
import CheckLogin from "./CheckLogin"
import Register from "./Register"
import Test2 from "./Test2"
import Profile from "./Profile"
import Header from "./Header"
import Footer from "./Footer"
import Liked from "./Liked"
import Facebook from "./Facebook"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import PartnerWithUs from "./PartnerWithUs"
import SingleViewPage from "./SingleViewPage"
import GoogleMaps1 from "./GoogleMaps1"
import GoogleMaps2 from "./GoogleMaps2"

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/main" component={Maintest}/>  */}
          <Route exact path="/login" component={Login}/> 
         <Route path ="/register" component={Register}/>

          <Route exact path="/" component={Main} />
          <Route path="/test2" component={Test2} />
          <Route exact path="/liked" component={Liked}></Route>

          <Route path="/Facebook" component={Facebook}></Route>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/PartnerWithUs" component={PartnerWithUs} />
          <Route path="/SingleViewPage/:id" component={SingleViewPage} />
          {/* <Route path = "/profile" component ={Profile}/> */}
          <Route path="/GoogleMaps1" component={GoogleMaps1}/>
          <Route path="/GoogleMaps2" component={GoogleMaps2}/>
          {/* <Route path = "/profile" component ={Profile}/> */}
          <Route path="*" component={CheckLogin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
