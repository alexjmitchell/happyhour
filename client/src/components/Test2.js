import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default props => {
    
return (

    <div>
        <h1> holi test2 </h1>
    <Link to={"/login"}><p>Login</p></Link>
    <Link to={"/register"}><p>Register</p></Link>
    <Link to={"/profile"}><p>profile</p></Link>
    </div>

  )
  
}
