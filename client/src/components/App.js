import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Login"
import Maintest from "./Maintest"
import Main from "./Main"
import CheckLogin from "./CheckLogin"
import Register from "./Register"
import Test2 from "./Test2"
import Profile from "./Profile"
import Header from "./Header";
import Footer from "./Footer";


import Liked from "./Liked"
import Facebook from "./Facebook"
import CompanyPage from "./CompanyPage"
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
          <Route exact path="/" component={Main} />
          <Route path="/test2" component={Test2} />
          <Route exact path="/liked" component={Liked}></Route>
          <Route path="/CompanyPage" component={CompanyPage}></Route>
          <Route path="/Facebook" component={Facebook}></Route>

        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/PartnerWithUs" component={PartnerWithUs}/>
        <Route path="/SingleViewPage" component={SingleViewPage}/>
        


         <Route exact path="/login" component={Login}/> 
         <Route path ="/register" component={Register}/>

         {/* <Route path = "/profile" component ={Profile}/> */}
          <Route path="*" component={CheckLogin}/>

          

        </Switch>
      </Router>
    </div>
  )
}

export default App
