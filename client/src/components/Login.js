import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { useAdmins } from '../hooks'
import { Link } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Login.css"

export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [loginmatch, setLoginmatch]=useState(true)
const { signin } = useAuth()
const { getone } = useAdmins ()

function handlesubmit(e){
    e.preventDefault()

    signin(username,password) //after signin we want to redirect to another page
    .then((resp)=>{
        setLoginmatch(true)
        getone(username)
        props.history.push("/profile")

    }) 
    .catch(e => {
        setLoginmatch(false)


        console.log(username + password + " user and password")

        console.log("LOGIN ERROR")
    })
// needs to be a promise because if not it will redirect before everything is done.
    //the "/" takes us to "*" in app.js that take us to checklogin. this check if it's authenticated shows profile if not, redirect to login

}

    return (
        <>
            <Header/>
            <div className="loginMainContainer">
                <div className="loginWrapper">
                    <div className="loginLeftSide">
                        <div className="loginLogo">Listo?</div>
                        <div className="toTheOtherForm">
                            <p className="toTheOtherFormText"> Don't<br/>have an<br/> account?</p>
                            <p className="toLogin"> <Link to="/register">Create Account</Link></p>
                        </div>
                    </div>
                    <div className="loginRightSide">
                        <p className="pleaseSignIn">Welcome Back</p>
                        <form className="loginForm" onSubmit={handlesubmit}>
                            <input type="text" name ="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                            <input type="text" name = "password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                { loginmatch ? "" : <p>login fail</p>}
                            <button className="loginButton" type="submit">Log  In</button>
                        </form>
                        <div className="forgotPswd">Forgot your password?</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}