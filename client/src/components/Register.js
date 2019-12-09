import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import { useAdmins } from '../hooks'
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Registration.css"
import { set } from 'date-fns';
import validator from "validator"

export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [contactName, setContactName]=useState('')
const [cpassword, setCPassword]=useState('')
const [email, setEmail]=useState('')
const [phonenumber, setPhone]=useState('')

//validation
const [userExists, setUserExists]=useState(false)
const [passError, setPassError]=useState(false)
const [emailError, setEmailError]=useState(false)
const [phoneError, setPhoneError]=useState(false)
const [descError, setDescError]=useState('')
let error = false
const [iserror, setisanError]=useState(false)


const { getRegistered } = useAdmins ()

const { reg } = useAuth()
const {admins } = useAdmins()

function handlesubmit(e){
    e.preventDefault()
    // error=false
// setUserExists(admins.filter(u=>u.username == username).length>0)
// console.log(userExists)

if(username=="" || password=="" || contactName=="" || password=="" || cpassword=="" || email==""){ 
    console.log("vacios") 
    setDescError("All fields are required") 
    setisanError(true)
    error=true

    } 
else { 
    setisanError(false)
    if (admins.filter(u=>u.username == username).length>0) { 
        setDescError("User already exists") // setisanError(true)
         setUserExists(true)  
         setPassError(false) 
         setEmailError(false) 
         setPhoneError(false) 
        error=true
        console.log("rxiste")
    } else if (!validator.isNumeric(phonenumber))
        { 
            setDescError("only numbers allowed") // setisanError(true)
            setPhoneError(true) 
            setEmailError(false) 
            setUserExists(false)
            setPassError(false) 
            error=true

    } else if (!validator.isEmail(email))
        { 
         setDescError("Must enter a valid email") // setisanError(true)
         setEmailError(true) 
         setUserExists(false)
         setPassError(false) 
         setPhoneError(false)
         error=true

        console.log("email mal")
    } else if (password !== cpassword)
        {
         setDescError("passwords does not match") // setisanError(true)
        setPassError(true) 
        setEmailError(false) 
        setUserExists(false)
        setPhoneError(false) 
        error=true
        
        console.log("pass ")

    } else{ 
        setUserExists(false) 
        setPassError(false) 
        setEmailError(false)


 }

 }
 
 


console.log( iserror + "variable iserror")


if (!error){
    
    // setisanError(false)
        console.log(username + " entra en if...")


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
                            {/* {userExists ? 
                            <p className="pred">User already exists</p>: ""} */}
                            <input className={userExists || iserror ? "red" : ""} type="text" name ="username" placeholder= "Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                            <input className ={iserror ? "red" : ""} type="text" name = "contactname" placeholder="Contact name" value={contactName} onChange={e=>setContactName(e.target.value)}/>
                            <input className ={iserror || phoneError ? "red" : ""} type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} onChange={e=>setPhone(e.target.value)}/>
                            <input className ={emailError || iserror ? "red" : ""} type="email" name ="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            <input className={passError || iserror ? "red" : ""} type="password" name = "password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                            <input className={passError || iserror ? "red" : ""} type="password" name = "cpassword" placeholder="confirm password" value={cpassword} onChange={e=>setCPassword(e.target.value)}/>
                            {descError!=""?
                            <p className="pred"> {descError}</p>: ""}
                            <button className="loginButton" type="submit">Create Your Account</button>
                        </form>
                        {/* { nameError!="" ? 
                        <p className="pred"> *All fields are required</p>
                          :""} */}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}