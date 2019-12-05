import React, { useState } from "react"
import { useAuth } from "../hooks"
import { useAdmins, useCompanies } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import internal links
import Header from "./Header"
import Footer from "./Footer"
// import stylesheet
import "../styles/SingleViewPage.css"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginmatch, setLoginmatch] = useState(true)
  const { signin } = useAuth()
  const { getone } = useAdmins()
  const { companies, oneCompany } = useCompanies()
  const comp = props.match.params.id
  const thecompany = companies.filter(e => e.companyname == comp)

  return (
    <div class="singlePageViewMainContainer">
      <Header/>
    <div>
        <h1> company: {comp} </h1>
        {thecompany.map(c => (
          <>
            <p>{c.companyname}</p>
            {/* <img src={c.picture} /> */}
            <p>{c.descrip}</p>
            <p>{c.menu}</p>

            <div class="redBackground">
              <div class="menuContainer">
                <div class="menuTop">
                  <div class="locationName">
                    <p>Company logo</p>
                    <p>ClaimJumper</p>
                    <p>Restaurant & Saloon</p>
                  </div>
                  <div class="singlePageViewBanner">
                    <p>Happy Hour</p>
                    <p>Appetizers</p>
                    <p>Available in Saloon only</p>
                  </div>
                </div>

                <div class="menuBody">
                  <div class="menuLeftSide">
                    <div class="happyHourMenu">
                      <h2>Happy Hour Menu</h2>
                    </div>
                  </div>

                  <div class="menuRightSide">
                    <div class="right1">
                      <img src={c.picture} width="300px" height="300px" />
                    </div>
                    <div class="right2">
                      <h2>Right 2</h2>
                    </div>
                    <div class="right3">
                      <h2>Right 3</h2>
                    </div>
                    <div class="GoogleMap">
                      <h2>MAP</h2>
                    </div>
                  </div>
                </div>

                <div class="menuBottom">
                  <h1 class="bottomText">Bottom section</h1>
                </div>
              </div>
            </div>

        <Footer/>
    </>
        ))}
      </div>
    </div>
  )
}
