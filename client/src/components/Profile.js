import React, { useState} from 'react'
// import { useAuth } from '../hooks'
import { useAdmins} from '../hooks'
import {useCompanies} from "../hooks"
// import { Link } from 'react-router-dom'
import "../styles/forms.css"
import Header from "./Header";
import Footer from "./Footer";

// import { set } from 'date-fns'


export default props => {
    // const {username} = useAuth()
    const {admins, oneAdmin} = useAdmins()
    const { companies, oneCompany, regProf, getOneC, updtPro } = useCompanies()
    const [username, setUsername]=useState(oneAdmin.map(u=>u.username).toString())
    const admin_id= Number(oneAdmin.map(u=>u.id).join(''))
    // const [password, setPassword]=useState('')

    const [contactName, setContactName]=useState(oneAdmin.map(u=>u.name).toString())
    const [email, setEmail]=useState(oneAdmin.map(u=>u.email).toString())
    const [phonenumber, setPhone]=useState(oneAdmin.map(u=>u.phone).toString())

    const [compName,setCompName]=useState("")
    const [address,setAddress]=useState('')
    const [usstate, setUsState]=useState('')
    const [city,setCity]=useState('')
    const [zip, setZip]=useState('')
    const [coordinates, setCoordinates]=useState('')
    const [compEmail, setCompEmail]=useState("")
    const [compPhone, setCompPhone]=useState('')
    const [compWeb,setCompWeb]=useState('')
    const [fb, setFb]=useState("")
    const [ig,setIg]=useState('')
    const [tw,setTw]=useState('')


    const [logo, setLogo]=useState('')
    const [foodType, setFoodType]=useState('')
    const [pic,setPic]=useState('')
    const [desc, setDesc]=useState('')
    const [banner,setBanner]=useState('')
    const [menu, setMenu]=useState('')
    const [startHr, setStartHr]=useState('')
    const [endHr, setEndHr]=useState('')


    const [monday, setMonday]=useState(true)
    const [tuesday, setTuesday]=useState(false) 
    const [wed, setWed]=useState(false) 
    const [thurs, setThurs]=useState(false) 
    const [fri, setFri]=useState(false) 
    const [sat, setSat]=useState(false) 
    const [sun, setSun]=useState(false) 



   // const id = admins.filter(a=>a.username == username).map(u=>u.id)
            //  setContactName(u.name)

     
    function handlesubmit(e){
        e.preventDefault()
        let days = []
        if (monday)
            {days.push("Mo")}
        if (tuesday)
        {days.push("Tu")}
        if (wed)
        {days.push("We")}
        if(thurs)
        {days.push("Th")}
        if(fri)
        {days.push("Fr")}
        if (sat)
        {days.push("Sa")}
        if (sun)
        {days.push("Su")}

        

if (admins.length ==0){ //company length
    console.log ("insert")
}else {
    console.log ("update")
}

const d=days.join(',')
        
       
console.log(days)
// console.log(d.join(","))
console.log(oneAdmin)

// console.log(dd.join(",") + " dd join days")


console.log({
    compName,
    address, city, usstate, zip, compPhone, compEmail, compWeb, fb, ig, tw, coordinates, logo, pic, foodType, menu, desc, d, startHr, endHr, admin_id
})
    
regProf(username,compName, address, city, usstate, zip, compPhone, compEmail, compWeb, fb, ig, tw, coordinates, logo, pic, foodType, menu, desc, d, startHr, endHr, admin_id) //after signin we want to redirect to another page
        .then((resp)=>{
            //func to send the company
            getOneC(compName)
            props.history.push("/test2")
    
        }) 
        .catch(e => {
            
    
            console.log(e + " ERROR")
        })


    }
    
        
        return (
            <>
          <Header/>

            <div className="prof">
                <h1> Profile: {username}</h1> 
                {/* solo se muestra este component si se ha hecho login */}
                <form onSubmit={handlesubmit}>
                    <div className="profInputs">

                            <div id="profileLeft">
                                <fieldset className="personalContactInputs">
                                    <input type="text" name ="username" placeholder="Username" value={username} />
                                    <input type="text" name = "contactname" placeholder="Contact name" value={contactName} />
                                    <input type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} />
                                    <input type="text" name ="email" placeholder="email" value={email} />
                                </fieldset>
                                <hr></hr>
                                <fieldset className="uploadImgsection">
                                    <input type="" name ="logo" placeholder="logo url**" value={logo} onChange={e=>setLogo(e.target.value)}/>
                                    <img src="https://via.placeholder.com/150C/O https://placeholder.com/"/>
                                    <input type="" name ="pic" placeholder="pic url**" value={pic} onChange={e=>setPic(e.target.value)}/>
                                    <img src="https://via.placeholder.com/150C/O https://placeholder.com/"/>
                                    <input type="" name ="banner" placeholder="banner url**" value={banner} onChange={e=>setBanner(e.target.value)}/>
                                    <img src="https://via.placeholder.com/150C/O https://placeholder.com/"/>
                                </fieldset>
                            </div>

                            <div id="right">
                                    <div id="rightTop">
                                        <fieldset className="loactioninputs">
                                        <input type="text" name = "companyname" placeholder="Company name" value={compName} onChange={e=>setCompName(e.target.value)} tabIndex="1" autoFocus/>
                                        <input type="text" name = "address" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} tabIndex="2"/>
                                        <input type="text" name = "state" placeholder="State" value={usstate} onChange={e=>setUsState(e.target.value)} tabIndex="3"/>
                                        <input type="text" name = "city" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} tabIndex="4"/>
                                        <input type="text" name = "zip" placeholder="Zip code" value={zip} onChange={e=>setZip(e.target.value)} tabIndex="5"/>
                                        <input type="text" name = "coordinates" placeholder="google coordinates" value={coordinates} onChange={e=>setCoordinates(e.target.value)} tabIndex="6"/>
                                        <textarea type="text" name="desc" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)}tabIndex="13"/>
                                    </fieldset>
                                
                                        <fieldset className="contactinputs">
                                        <input type="text" name ="companyemail" placeholder="Company email" value={compEmail} onChange={e=>setCompEmail(e.target.value)} tabIndex="7"/>
                                        <input type="text" name ="phone" placeholder="Company phone" value={compPhone} onChange={e=>setCompPhone(e.target.value)} tabIndex="8"/>
                                        <input type="text" name ="website" placeholder="Company website" value={compWeb} onChange={e=>setCompWeb(e.target.value) } tabIndex="9"/>
                                        <input type="text" name ="fb" placeholder="Company Facebook" value={fb} onChange={e=>setFb(e.target.value)} tabIndex="10"/>
                                        <input type="text" name ="ig" placeholder="Company Instagram" value={ig} onChange={e=>setIg(e.target.value)} tabIndex="11"/>
                                        <input type="text" name ="tw" placeholder="Company Twitter" value={tw} onChange={e=>setTw(e.target.value)} tabIndex="12"/>
                                        <textarea type="text" name="menu" placeholder="Menu" value={menu} onChange={e=>setMenu(e.target.value)} tabIndex="14"/>

                                    </fieldset>

                                    </div>
                                

                                    <div className="middleBottom">
                                            <fieldset className="happydays">
                                                
                                                <label> M
                                                    <input type="checkbox" value={monday} checked={monday} onChange={e=>setMonday(!monday)} tabIndex="15"/>                      
                                                </label>
                                                <label> T
                                                    <input type="checkbox" value={tuesday} checked={tuesday} onChange={e=>setTuesday(!tuesday)} tabIndex="16"/>                      
                                                </label>
                                                <label> W
                                                    <input type="checkbox" value={wed} checked={wed} onChange={e=>setWed(!wed)} tabIndex="17"/>                      
                                                </label>
                                                <label> T
                                                    <input type="checkbox" value={thurs} checked={thurs} onChange={e=>setThurs(!thurs)} tabIndex="18"/>                      
                                                </label>
                                                <label> F
                                                    <input type="checkbox" value={fri} checked={fri} onChange={e=>setFri(!fri)} tabIndex="19"/>                      
                                                </label>
                                                <label> S
                                                    <input type="checkbox" value={sat} checked={sat} onChange={e=>setSat(!sat)} tabIndex="20"/>                      
                                                </label>
                                                <label> S
                                                    <input type="checkbox" name="sun" value={sun} checked={sun} onChange={e=>setSun(!sun)} tabIndex="21"/>                      
                                                </label>

                                            </fieldset>
                                            <fieldset className="hr">
                                                <input type="" name ="starhour" placeholder="start hr**" value={startHr} onChange={e=>setStartHr(e.target.value)} tabIndex="22"/>
                                                <input type="" name ="endhour" placeholder="end hr" value={endHr} onChange={e=>setEndHr(e.target.value)} tabIndex="23"/>
                                            </fieldset>
                                                
                                            <input type="" name ="foodtype" placeholder="Food type" value={foodType} onChange={e=>setFoodType(e.target.value)} tabIndex="24"/>
                                            <div className="buttons">
                                                 <button type="submit">Update profile</button>
                                            </div>
                                    </div>
                            </div>
                            

                     </div>
                

                    
                </form>
    
            </div>
            <Footer/>

</>
        ) 







}



