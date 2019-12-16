import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { useAdmins } from '../hooks'
import {useCompanies} from "../hooks"

import { Link } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import admins from '../redux/ducks/admins'
import "../styles/Login.css"
import { get } from 'https'
import Icon from "../lib/Icon";

export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [loginmatch, setLoginmatch]=useState(true)
const { signin } = useAuth()
const {getone, getRegistered } = useAdmins ()
// const { getonc } = useCompanies()
const [nameError, setNameError] = useState('')

function handlesubmit(e){
    e.preventDefault()

    if(!username || !password){
        setNameError("All fields required")
    }
        else {
    setNameError("")
        }
    
    signin(username,password) //after signin we want to redirect to another page
    .then((resp)=>{
        setLoginmatch(true)
        getone(username)
        
        props.history.push("/profile")

    }) 
    .catch(e => {
    
        setLoginmatch(false)
    
        console.log("LOGIN ERROR")
    })
// needs to be a promise because if not it will redirect before everything is done.
    //the "/" takes us to "*" in app.js that take us to checklogin. this check if it's authenticated shows profile if not, redirect to login

}

    return (
        <>
            <div className="loginMainContainer">
                <div className="loginWrapper">
                    <div className="loginLeftSide">
                        <div className="loginLogo">HHFindr.com</div>
                        {/* <div className="loginLeftSidePics">
                            <div className="loginLeftSidePic1"></div>
                            <div className="loginLeftSidePic2"></div>
                            <div className="loginLeftSidePic3"></div>
                            <div className="loginLeftSidePic4"></div>
                        </div> */}
                    </div>
                    <div className="loginRightSide">
                        <div className="loginHouseContainer">
                            <Link className="loginHouse" to={'/'}><Icon icon="home"/></Link>
                        </div>
                        <form className="loginForm" onSubmit={handlesubmit}>
                            <p className="loginPleaseSignIn">Welcome Back!</p>
                            {/* {userExists ? 
                            <p className="pred">User already exists</p>: ""} */}
                            <input className={!loginmatch && !nameError? "red" : ""} type="text" name ="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                            <input className={!loginmatch && !nameError? "red" : ""} type="password" name = "password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                            <div className="loginBottom">
                                <button className="loginButton" type="submit">Log  In</button>
                                <div className="loginBottomRight">
                                    <p className="loginToRegistration"> <Link to="/register">Sign Up</Link></p>
                                </div>
                            </div>
                            <div className="loginRegistrationValidation">
                                { !loginmatch && !nameError? <p className="loginValText">User or password is incorrect</p> :"" }
                                { nameError!="" ? <p className="loginValText">All fields required</p> :""}
                                <div className="loginSpaceHolder"></div>
                                <p className="loginToTheOtherFormText"> Don't have an account?</p>
                            </div>
                        </form>
                        {/* { nameError!="" ? 
                        <p className="pred">All fields required</p>
                          :""} */}
                    </div>
                </div>
                <div className="loginBottomSection">
                        <div className="loginBottomSectionPic1"></div>
                        <div className="loginBottomSectionPic2"></div>
                    </div>
                <Footer/>                
            </div>
        </>
    )
}