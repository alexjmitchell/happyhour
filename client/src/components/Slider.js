import React from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers } from "../hooks"

function Slider() {
  const { users } = useUsers()
  const fn = function() {}
  return (
    <div>
      <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p>

      <div className="container">
        <Coverflow
          width="960"
          height="500"
          displayQuantityOfSide={4}
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {users.map((user, i) => (
            <img
              className="pics"
              src={user.picture}
              alt={<Link to={"/CompanyPage"}>{user.companyname}</Link>}

              // data-action="our link"
              // style={{
              //   display: "block",
              //   width: "100%"
              // }}
            />
          ))}
        </Coverflow>
      </div>
    </div>
  )
}
export default Slider
