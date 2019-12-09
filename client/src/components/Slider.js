import React from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"
// import { start } from "repl"

function Slider() {
  const { users, filter, hours } = useUsers()
  const { companyname } = useCompanies()
  const { liked } = useLiked()

  const fn = function() {}

  function handleClick(e, liked) {
    e.preventDefault()
    // props.history.push("/CompanyPage/" + liked)
  }

  return (
    <div>
      {/* <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p> */}
      {/* //--- test heart--- */}
      {/* <button onClick={e => handleClick(e, "hello")}>
        <Icon icon="heart" />
      </button> */}
      {/* //--- test heart--- */}
      <div>
        <Coverflow
          width="960"
          height="800"
          displayQuantityOfSide={2.5}
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {users.map((user, i) => (
            <img
              key={i}
              className="slidePics"
              src={user.picture}
              height={300}
              alt={
                <a className="sliderImg" href={user.website}>
                  {user.companyname}
                </a>
              }
            />
          ))}
        </Coverflow>
        {/* <div className="naslov">
          {hours.map((hour, i) => (
            <button className="buttons" key={i} onClick={e => filter(hour)}>
              {hour}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  )
}
export default Slider
