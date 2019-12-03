import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login'
import Maintest from './Maintest'
import Main from './Main'
import CheckLogin from "./CheckLogin"
import Register from "./Register"
import Test2 from "./Test2"
import Profile from "./Profile"
// Laz Components Added
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import PartnerWithUs from "./PartnerWithUs"
import SingleViewPage from "./SingleViewPage"

function App() {
  return (
    <div>
      <Router>

        <Switch>
        {/* <Route exact path="/main" component={Maintest}/>  */}
        <Route exact path="/" component={Main}/>
        <Route path="/test2" component={Test2}/>

        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/PartnerWithUs" component={PartnerWithUs}/>
        <Route path="/SingleViewPage" component={SingleViewPage}/>
        
        <Route path="/Login" component={Login}/> 
        <Route path ="/Register" component={Register}/>

         {/* <Route path = "/profile" component ={Profile}/> */}
          <Route path="*" component={CheckLogin}/>
          </Switch>

      </Router> 
     </div>
  )
}

export default App

