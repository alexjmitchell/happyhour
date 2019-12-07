import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import { useAdmins } from '../hooks'
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Registration.css"

export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [contactName, setContactName]=useState('')
const [cpassword, setCPassword]=useState('')
const [email, setEmail]=useState('')
const [phonenumber, setPhone]=useState('')
const [nameError, setNameError] = useState('')
const [userExists, setUserExists]=useState(false)
const [passError, setPassError]=useState('')



const { getRegistered } = useAdmins ()

const { reg } = useAuth()
const {admins } = useAdmins()

function handlesubmit(e){
    e.preventDefault()

    let err=false
if(!username || !password || !contactName || !password || !cpassword || !email){
    console.log("vacios")
    setNameError("All fields are required")
}
    else {
setNameError("")
    }
 
    setUserExists( admins.filter(u=>u.username == username).length>0 ? true : false)
    setPassError (password === cpassword ? "" : "passwords does not match")


    reg(username,password,contactName,phonenumber,email) //after signin we want to redirect to another page
    .then((resp)=>{
        getRegistered([ //to display on the profile component
            {
                username,
                name: contactName,
                email,
                phone: phonenumber,
                justRegistered: "r"
            }]
        )


        props.history.push("/profile")

    }) 
    .catch(e => {
        console.log("LOGIN ERROR")
    })
// needs to be a promise because if not it will redirect before everything is done.
    //the "/" takes us to "*" in app.js that take us to checklogin. this check if it's authenticated shows profile if not, redirect to login



}

    return (

        <>
            <Header/>
            <div className="regMainContainer">
                <div className="regWrapper">
                    <div className="regLeftSide">
                        <div className="regLogo">Listo?</div>
                        <div className="toTheOtherForm">
                            <p className="toTheOtherFormText">Already<br/> registered?</p>
                            <p className="toReg"><Link to="/login">Log In</Link></p>
                        </div>
                    </div>
                    <div className="loginRightSide">
                        <p className="pleaseSignIn">Partner Registration</p>
                        <form className="loginForm" onSubmit={handlesubmit}>
                            {userExists ? 
                            <p className="pred">User already exists</p>: ""}
                            <input className={userExists? "red" : ""} type="text" name ="username" placeholder= "Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                            <input type="text" name = "contactname" placeholder="Contact name" value={contactName} onChange={e=>setContactName(e.target.value)}/>
                            <input type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} onChange={e=>setPhone(e.target.value)}/>
                            <input type="text" name ="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            <input className={passError ? "red" : ""} type="text" name = "password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                            <input className={passError ? "red" : ""} type="text" name = "cpassword" placeholder="confirm password" value={cpassword} onChange={e=>setCPassword(e.target.value)}/>
                            {passError!=""?
                            <p className="pred"> {passError}</p>: ""}
                            <button className="loginButton" type="submit">Create Your Account</button>
                        </form>
                        { nameError!="" ? 
                        <p className="pred"> *All fields are required</p>
                          :""}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}