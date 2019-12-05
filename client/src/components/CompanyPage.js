import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useCompanies, useLiked } from "../hooks"

export default props => {
  const { companies, oneCompany } = useCompanies()
  const { liked } = useLiked()
  console.log(liked, "test4")
  console.log(companies, "test5")
  const comp = props.match.params.id
  const thecompany = companies.filter(e => e.companyname == comp)
  return (
    <div>
      {liked.map((user, i) => (
        <img className="slidePics" src={user.picture} />
        //   alt={
        //     <Link
        //       className="sliderImg"
        //       to={`/SingleViewPage/${user.companyname}`}
        //     >
        //       {user.companyname}
        //     </Link>
        //   }
        // />
      ))}
    </div>
  )
}
