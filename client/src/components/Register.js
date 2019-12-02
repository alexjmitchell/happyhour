import React, { useState} from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import { useAdmins } from '../hooks'

import "../styles/forms.css"


export default props => {
const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
const [contactName, setContactName]=useState('')
const [cpassword, setCPassword]=useState('')
const [email, setEmail]=useState('')
const [phonenumber, setPhone]=useState('')
const { getRegistered } = useAdmins ()


const { reg } = useAuth()

function handlesubmit(e){
    e.preventDefault()

    reg(username,password,contactName,phonenumber,email) //after signin we want to redirect to another page
    .then((resp)=>{
        getRegistered([
            {
                username,
                name: contactName,
                email,
                phone: phonenumber
            }
        ]
        )

        props.history.push("/profile")

    }) 
    .catch(e => {
        console.log(username + " " + password + " user and password")
        console.log(contactName + " " + phonenumber + " contactname and phone")
        console.log("email " + email)


        console.log("LOGIN ERROR")
    })
// needs to be a promise because if not it will redirect before everything is done.
    //the "/" takes us to "*" in app.js that take us to checklogin. this check if it's authenticated shows profile if not, redirect to login

}

    return (
        <div className="reg">
            <h1> Sign up</h1>
            <form onSubmit={handlesubmit}>
                <div className="inputs">
                    <input type="text" name ="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                    <input type="text" name = "contactname" placeholder="Contact name" value={contactName} onChange={e=>setContactName(e.target.value)}/>
                    <input type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} onChange={e=>setPhone(e.target.value)}/>
                    <input type="text" name ="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type="text" name = "password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <input type="text" name = "cpassword" placeholder="confirm password" value={cpassword} onChange={e=>setCPassword(e.target.value)}/>

                </div>
                <div className="button">
                    <button type="submit">Register</button>
                </div>
            </form>
            <div className="toTheOtherForm">
            <p> Already registered? </p>
            <p className="toLogin"><Link to="/login">Login</Link></p>
            </div>

        </div>
    )
}