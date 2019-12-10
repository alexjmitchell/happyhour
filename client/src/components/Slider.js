import React from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"
// import { start } from "repl"

function Slider() {
  const { users, filter } = useUsers()
  const { companyname } = useCompanies()
  const { liked } = useLiked()

  const fn = function() {}

  function handleClick(e, liked) {
    e.preventDefault()
    // props.history.push("/CompanyPage/" + liked)
  }

  return (
    <div>
      {/* {users.map((user, i) => (
            <div onClick={e => time(user.starthour)}>
              <p>4 pm</p>
              </div>, */}
      {/* <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p> */}
      <select
        // className={iserror ? "sd red" : "sd"}
        onChange={e => filter(e.target.value)}
        // tabIndex="22"
        // value={startHr}
      >
        <option value="default"> Select</option>
        <option value="00">12:00 am</option>
        <option value="01">01:00 am</option>
        <option value="02">02:00 am</option>
        <option value="03">03:00 am</option>
        <option value="04">04:00 am</option>
        <option value="05">05:00 am</option>
        <option value="06">06:00 am</option>
        <option value="07">07:00 am</option>
        <option value="08">08:00 am</option>
        <option value="09">09:00 am</option>
        <option value="10">10:00 am</option>
        <option value="11">11:00 am</option>
        <option value="12">12:00 pm</option>
        <option value="13">01:00 pm</option>
        <option value="14">02:00 pm</option>
        <option value="15">03:00 pm</option>
        <option value="16">04:00 pm</option>
        <option value="17">05:00 pm</option>
        <option value="18">06:00 pm</option>
        <option value="19">07:00 pm</option>
        <option value="20">08:00 pm</option>
        <option value="21">09:00 pm</option>
        <option value="10:00 pm">10:00 pm</option>
        <option value="23">11:00 pm</option>
      </select>
      {/* <button onClick={e => filter("16:00")}>change time</button> */}
      <div>
        <Coverflow
          width="960"
          height="800"
          displayQuantityOfSide={2.5}
          navigation={false}
          enableScroll={false}
          // enableHeading={true}
          // infiniteScroll={true}
          clickable={true}
          active={0}
          // media={{
          //   "@media (max-width: 900px)": {
          //     // width: "600px"
          //     // height: "300px"
          //   },
          //   "@media (min-width: 900px)": {
          //     // width: "960px"
          //     // height: "800px"
          //   }
          // }}
        >
          {users.map((user, i) => (
            // <div onClick={e => time(user.starthour)}>

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

            // <div>
            //   {user.starthour} {user.endhour}
            // </div>
          ))}
        </Coverflow>
        {/* <div className="naslov">
          {users.map((hour, i) => (
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
