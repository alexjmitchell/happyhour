import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default props => {
    
return (

    <div>
    <Link to={"/login"}><p>Login</p></Link>
    <Link to={"/register"}><p>Register</p></Link>
    <Link to={"/profile"}><p>profile</p></Link>
    <Link to={"/test2"}><p>test2</p></Link>


    </div>

  )
  
}
