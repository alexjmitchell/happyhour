import React from "react"
import "../styles/Maincss.css"

function Facebook() {
  return (
    <div>
      <span>Log in with Facebook</span>

      <div className="login_form">
        <form>
          <input
            type="email"
            name="email"
            value="email"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            value="password"
            placeholder="Password"
          />
          <input type="submit" name="submit" placeholder="Log in" />
        </form>
      </div>
    </div>
  )
}
export default Facebook
