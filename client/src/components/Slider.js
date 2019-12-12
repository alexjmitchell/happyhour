import React, { useState } from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"

import Radium, { Style, StyleRoot } from "radium"

function Slider() {
  const { users, filter } = useUsers()
  const { companyname } = useCompanies()
  const { liked } = useLiked()
  const [val, setVal] = useState("") // kreiramo variablu const direktno na ovoj komponenti. Zatim val je variable a setVal je function.
  // U ovom slucaju koristimo uvek useState("") i moramo da ga importujemo u react,{useState}. useState je funkcija koja radi sta god da joj kazemo ili prenesemo.
  // useState je u stvari funkcija koja prenosi sve na funkciju setVal i sve sto joj damo (value) prenosi na val variablu. i onda koristimo tu val kao value.
  var d = new Date() // var d kreiramo ovde direktno i ako console.log(d) vidimo da dobijamo tacno vreme trenutno.
  var hr = d.getHours() // var hr kreiramo ovde direktno i ako console.log(hr) vidimo da dobijamo tacno vreme trenutno. i mozemo da prosledimo value od hr ili d gde hocemo
  // u ovom slucaju je prosledjujemo dole u setVal koji prenosi value u variablu val gore gde je useState i onde je value smestena u val koji mozemo da koristimo gde hocemo.
  // u jednom slucaju preneli smo val u const newArray a zatim koristimo filter dole i komperujemo da li je jednaka sa data starthour.
  // Svaka value koja je jednaka prosledjuje se u const newArray i onda koristimo newArray gde hocemo.

  const fn = function() {} // slider library

  function handleClick(e, liked) {
    e.preventDefault()
    // props.history.push("/CompanyPage/" + liked)   je ako hocemo da prenesemo data na bilo koju komponentu . u ovom slucaju je CompanyPage. a + liked je data koju prenosimo tamo
  }

  console.log(hr, "eee")

  const newArray = users.filter(p => p.starthour == val)
  console.log(newArray)
  return (
    <div className="sliderW">
      {/* <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p> */}

      {/* // onChange={e => filter(e.target.value)}  */}

      {/* // ovde prosledjujemo e.target.value u setVal() i to je sad u stvari val  */}
      {/* // e.target.value je u stvari value bilo koja od 00 do 23 koji prenosimo preko setVal u val i komperujemo je sa starthour u filter i prenosimo u newArray */}
      <select onChange={e => setVal(e.target.value)}>
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
      {/* // ovde prosledjujemo hr u setVal() i to je sad u stvari val  koji je jednak sa data koji komperujemo u ovom slucaju starthour gore u filter */}
      <button onClick={e => setVal(hr)}>happy hour now</button>

      <div>
        <Coverflow
          width="960"
          height="1000"
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
          {/* // ternary operator // {newArray.length === 0 ? "" : ""} // if and else na istoj liniji u ovom slucaju je prvi map ili drugi */}
          {newArray.length === 0
            ? users.map((user, i) => (
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
              ))
            : newArray.map((user, i) => (
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
    </div>
  )
}
export default Slider
