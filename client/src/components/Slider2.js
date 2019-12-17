import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useUsers, useCompanies, useLiked } from "../hooks"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Radium, { Style, StyleRoot } from "radium"
import "../styles/Slider2.css"
function Slider2() {
  const { users, filter, usersS } = useUsers() //all the companies
  // const comp = props.match.params.id

  const [time, setTime] = useState("")
  const [search, setSearch] = useState("")

  var d = new Date()
  var hr = d.getHours()
  const fn = function() {} // slider library

  // useEffect(() => {
  //   filterBars(val, search, users)
  // }, [val, search, users])

  function handleClick(e) {
    e.preventDefault()
    // props.history.push("/CompanyPage/")
    // je ako hocemo da prenesemo data na bilo koju komponentu . u ovom slucaju je CompanyPage. a + liked je data koju prenosimo tamo
  }

  // useEffect(() => {
  //   filterBars
  // }, [val, search])
  //  const thecompany = companies.filter(e => e.companyname == comp)
  const newTime = users.filter(p => time >= p.starthour && time <= p.endhour)
  const newSearch = users.filter(p => p.companyname.toLowerCase() == search)

  // const newerArray = newArray.filter(i => i.name === SVGPathSegCurve)
  // console.log(newArray)
  // const { users, filter } = useUsers()
  // const { companyname } = useCompanies()
  // const { liked } = useLiked()
  // const [val, setVal] = useState("")
  // var d = new Date()
  // var hr = d.getHours()

  // const fn = function() {}

  // function handleClick(e, liked) {
  //   e.preventDefault()
  // }

  // console.log(hr, "eee")

  // const newArray = users.filter(p => p.starthour == val)
  // console.log(newArray)
  return (
    <div className="sliderResponsive">
      <div className="filters">
        {/* <label>Happy Hours ( select time)! </label> */}
        <select className="dropDown" onChange={e => setTime(e.target.value)}>
          <option value=""> Select</option>
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
          <option value="22">10:00 pm</option>
          <option value="23">11:00 pm</option>
        </select>
        <button className="currentHH" onClick={e => setTime(hr)}>
          H.H Happening Now !
        </button>
        <input
          className="searchBar"
          placeholder="H.Hours ( by company )!"
          type="text"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {newSearch.map((user, i) => (
        <Link to={`/SingleViewPage/${user.companyname}`}>
          {user.companyname}

          <img
            key={i}
            className="slidePics"
            src={user.picture}
            height={100}
            alt={
              <a className="sliderImg" href={user.website}>
                {user.companyname}
              </a>
            }
          />
        </Link>
      ))}
      <div>
        {/* infiniteLoop={true} makes autoPlay to run new circle from the begining */}
        <Carousel
          autoPlay={true}
          useKeyboardArrows
          infiniteLoop={true}
          interval={4000}
          transitionTime={350}
        >
          {newTime.length === 0
            ? users.map((user, i) => (
                <>
                  <img
                    key={i}
                    className="slidePics2"
                    src={user.picture}
                    alt={
                      <a href={user.website}>
                        <p className="legend">{user.companyname}</p>
                      </a>
                    }
                  />
                  <a href={user.website}>
                    <p className="legend">{user.companyname}</p>
                  </a>
                </>
              ))
            : newTime.map((user, i) => (
                <>
                  <img
                    key={i}
                    className="slidePics2"
                    src={user.picture}
                    alt={<a href={user.website}>{user.companyname}</a>}
                  />
                  <a href={user.website}>
                    <p className="legend">{user.companyname}</p>
                  </a>
                </>
              ))}
        </Carousel>
        {/* <select onChange={e => setVal(e.target.value)}>
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
        <option value="22">10:00 pm</option>
        <option value="23">11:00 pm</option>
      </select>

      <button onClick={e => setVal(hr)}>happy hour now</button>

      <div>
        <StyleRoot>
          <Coverflow
            width="960"
            height="1000"
            displayQuantityOfSide={2.5}
            navigation={false}
            enableScroll={false}
            clickable={true}
            active={0}
          >
            {newArray.length === 0
              ? users.map((user, i) => (
                  <img
                    key={i}
                    className="slidePics"
                    src={user.picture}
                    height={500}
                    alt={
                      <a className="sliderImg" href={user.website}>
                        {user.companyname}
                      </a>
                    }
                  />
                ))
              : newArray.map((user, i) => (
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
        </StyleRoot>
      </div> */}
      </div>
    </div>
  )
}
export default Slider2
