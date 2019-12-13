import React from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"
// import "../styles/Slider.css"
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
    <div className="CoverflowCarousel">
          <Coverflow
            width="960"
            height="1000"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={false}
            clickable={true}
            active={0}
            // enableHeading={false}
            // initialScroll
            // currentFigureScale={3}
            // otherFigureScale={.8}
            // media={{
            //   '@media (max-width: 1200px)': {
            //     width: '600px',
            //     height: '300px'
            //   },
            //   '@media (min-width: 900px)': {
            //     width: '960px',
            //     height: '600px'
            //   }
            // }}
          >
            {users.map((user, i) => (
              <img
                key={i}
                className="slidePics"
                src={user.picture}
                height={450}
                alt={
                  <a className="sliderImg" href={user.website}>
                    {user.companyname}
                  </a>
                }
              />
            ))}
          </Coverflow>

    </div>
  )
}
export default Slider
