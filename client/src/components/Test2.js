// import React from 'react'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import {useCompanies} from "../hooks"


// export default props => {
//   const { companies, oneCompany } = useCompanies()
//   console.log(companies + "companiesentest2")
//   console.log(oneCompany + "onecompany test2")
// const thecompany=companies.filter(e=>e.companyname == oneCompany)
// return (

//     <div>
      
//         {/* { <h1> company: {oneCompany} </h1> */}
//         {thecompany.map(c=>(
//           <>
//           <p>{c.companyname}</p>
//           <p>{c.admin_id}</p>
//           <p>{c.hhdays}</p>
//           </>
//         ))}

//         {/* {companies.map(u=> <p>u.picture</p>)} */}

//     <Link to={"/login"}><p>Login</p></Link>
//     <Link to={"/register"}><p>Register</p></Link>
//     <Link to={"/profile"}><p>profile</p></Link>
//     <Link to={"/"}><p>main</p></Link> 

//     </div>

//   )
  
// }




import React from 'react'

 export default props => {


let lng 
let lat
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }
  
  function displayLocationInfo(position) {
     lng = position.coords.longitude;
     lat = position.coords.latitude;
  
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }
return(<> 

    
</>)  

}
