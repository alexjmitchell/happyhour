import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import { useUsers } from "../hooks"

export default props => {
  const { users } = useUsers
  const companyId = props.match.params.company
  const [company, setCompany] = useState([])
  useEffect(() => {
    Axios.get(`/specials/+${companyId}`).then(res => setCompany(res.data))
  }, [company])
  return (
    <>
      {/* <div><ProductFilter/></div>
        <div><ShoeSearch /></div> */}
      <div id="playercontainer">
        {users.map((user, i) => (
          <div id="profile">
            <Link
              to={"/specials/" + user.companyname}
              key={"player" + i}
            ></Link>
          </div>
        ))}
      </div>
    </>
  )
}
