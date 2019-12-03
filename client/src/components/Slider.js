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
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {users.map((user, i) => (
            <Link to="/CompanyPage">
              <img
                className="pics"
                src={user.picture}
                alt={user.companyname}
                // data-action="our link"
                // style={{
                //   display: "block",
                //   width: "100%"
                // }}
              />
            </Link>
          ))}
        </Coverflow>
      </div>
    </div>
  )
}
export default Slider
