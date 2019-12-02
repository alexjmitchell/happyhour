import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login'
import Maintest from './Maintest'
import Main from './Main'
import CheckLogin from "./CheckLogin"
import Register from "./Register"
import Test2 from "./Test2"
import Profile from "./Profile"

function App() {
  return (
    <div>
      <Router>

        <Switch>
        {/* <Route exact path="/main" component={Maintest}/>  */}
        <Route exact path="/" component={Main}/>
        <Route path="/test2" component={Test2}/>

         <Route path="/login" component={Login}/> 
         <Route path ="/register" component={Register}/>

         {/* <Route path = "/profile" component ={Profile}/> */}
          <Route path="*" component={CheckLogin}/>
          </Switch>

      </Router> 
     </div>
  )
}

export default App

