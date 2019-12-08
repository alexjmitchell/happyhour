import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useCompanies} from "../hooks"





if(compName=="" || address=="" || usstate=="" || city=="" || zip=="" || compEmail=="" || compWeb=="" || compPhone =="" || days=="" || pic=="" || startHr=="" || endHr==""){ 
    console.log("vacios") 
    setDescError("Please check required fields") 
    setisanError(true)
    error=true

    } 
else { 
    setisanError(false)
    if (!validator.isNumeric(zip) || !validator.isNumeric(compPhone))  { 
        setDescError("Only Numbers allowed") 
        setEmailError(false) 
        setNotaNumberError(true) 
        error=true
    } else if (!validator.isEmail(compEmail))
        { 
        setDescError("Only Numbers allowed") 
        setEmailError(false) 
        setNotaNumberError(true) 
        error=true
    } else{ 
        setEmailError(false) 
        setNotaNumberError(true) 


 }

 }
