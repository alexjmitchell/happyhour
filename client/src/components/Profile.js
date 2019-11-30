import React from 'react'
import { useAuth } from '../hooks' //***** */
import { Route, Redirect } from 'react-router-dom'
import Profile from "./Profile"


export default props => {
    const {username} = useAuth()

    return <h1> Profile: {username}</h1> //solo se muestra este component si se ha hecho login
}



