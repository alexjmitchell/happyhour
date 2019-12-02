import React, { useState} from 'react'
// import { useAuth } from '../hooks'
import { useAdmins} from '../hooks'
// import { Link } from 'react-router-dom'
import "../styles/forms.css"
// import { set } from 'date-fns'


export default props => {
    // const {username} = useAuth()
    const {admins, oneAdmin} = useAdmins()
    const [username, setUsername]=useState(oneAdmin.map(u=>u.username).toString())
    // const [password, setPassword]=useState('')



    const [contactName, setContactName]=useState(oneAdmin.map(u=>u.name).toString())
    const [email, setEmail]=useState(oneAdmin.map(u=>u.email).toString())
    const [phonenumber, setPhone]=useState(oneAdmin.map(u=>u.phone).toString())

    const [compName,setCompName]=useState("")
    const [adress,setAdress]=useState('')
    const [usstate, setUsState]=useState('')
    const [city,setCity]=useState('')
    const [zip, setZip]=useState('')
    const [coordinates, setCoordinates]=useState('')
    const [compEmail, setCompEmail]=useState("")
    const [compPhone, setCompPhone]=useState('')
    const [compWeb,setCompWeb]=useState('')
    const [fb, setFb]=useState("")
    const [ig,setIg]=useState('')
    const [logo, setLogo]=useState('')
    const [foodType, setFoodType]=useState('')
    const [pic,setPic]=useState('')
    const [desc, setDesc]=useState('')
    const [banner,setBanner]=useState('')
    const [menu, setMenu]=useState('')

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
const d=days
        if (monday)
            {days.push("M")}
        if (tuesday)
        {days.push("T")}
        if (wed)
        {days.push("W")}
        if(thurs)
        {days.push("T")}
        if(fri)
        {days.push("F")}
        if (sat)
        {days.push("Sa")}
        if (sun)
        {days.push("Su")}

if (admins.length ==0){ //company length
    console.log ("insert")
}else {
    console.log ("update")
}


        
       
console.log(days)
console.log(d.join(","))
console.log(oneAdmin)

// console.log(dd.join(",") + " dd join days")

    
        // reg(username,password,contactName,phonenumber,email) //after signin we want to redirect to another page
        // .then((resp)=>{
        //     props.history.push("/profile")
    
        // }) 
        // .catch(e => {
        //     console.log(username + " " + password + " user and password")
        //     console.log(contactName + " " + phonenumber + " contactname and phone")
        //     console.log("email " + email)
    
    
        //     console.log("LOGIN ERROR")
        // })


    }
    
        
        return (
            <div className="prof">
                <h1> Profile: {username}</h1> 
                {/* solo se muestra este component si se ha hecho login */}
                <form onSubmit={handlesubmit}>
                    <div className="profInputs">
                        <input type="text" name ="username" placeholder="Username" value={username} />
                        <input type="text" name = "contactname" placeholder="Contact name" value={contactName} />
                        <input type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} />
                        <input type="text" name ="email" placeholder="email" value={email} />
<hr></hr>

                        <input type="text" name = "companyname" placeholder="Company name" value={compName} onChange={e=>setCompName(e.target.value)}/>
                        <input type="text" name = "adress" placeholder="Adress" value={adress} onChange={e=>setAdress(e.target.value)}/>

                        <input type="text" name = "state" placeholder="State" value={usstate} onChange={e=>setUsState(e.target.value)}/>
                        <input type="text" name = "city" placeholder="City" value={city} onChange={e=>setCity(e.target.value)}/>
                        <input type="text" name = "zip" placeholder="Zip code" value={zip} onChange={e=>setZip(e.target.value)}/>
                        <input type="text" name = "coordinates" placeholder="google coordinates" value={coordinates} onChange={e=>setCoordinates(e.target.value)}/>
                        <input type="text" name ="companyemail" placeholder="Company email" value={compEmail} onChange={e=>setCompEmail(e.target.value)}/>
                        <input type="text" name ="phone" placeholder="Company phone" value={compPhone} onChange={e=>setCompPhone(e.target.value)}/>
                        <input type="text" name ="website" placeholder="Company website" value={compWeb} onChange={e=>setCompWeb(e.target.value)}/>
                        <input type="text" name ="fb" placeholder="Company Facebook" value={fb} onChange={e=>setFb(e.target.value)}/>
                        <input type="text" name ="ig" placeholder="Company Instagram" value={ig} onChange={e=>setIg(e.target.value)}/>

                        <input type="" name ="logo" placeholder="logo url**" value={logo} onChange={e=>setLogo(e.target.value)}/>
                        <input type="" name ="pic" placeholder="pic url**" value={pic} onChange={e=>setPic(e.target.value)}/>
                        <input type="" name ="banner" placeholder="banner url**" value={banner} onChange={e=>setBanner(e.target.value)}/>

                        <input type="" name ="foodtype" placeholder="Food type" value={foodType} onChange={e=>setFoodType(e.target.value)}/>


                        <textarea type="text" name="desc" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)}/>

                        <textarea type="text" name="menu" placeholder="Menu" value={menu} onChange={e=>setMenu(e.target.value)}/>

                        <fieldset>
                        



                            <label> M
                                <input type="checkbox" value={monday} checked={monday} onChange={e=>setMonday(!monday)}/>                      
                            </label>
                            <label> T
                                <input type="checkbox" value={tuesday} checked={tuesday} onChange={e=>setTuesday(!tuesday)}/>                      
                            </label>
                            <label> W
                                <input type="checkbox" value={wed} checked={wed} onChange={e=>setWed(!wed)}/>                      
                            </label>
                            <label> T
                                <input type="checkbox" value={thurs} checked={thurs} onChange={e=>setThurs(!thurs)}/>                      
                            </label>
                            <label> F
                                <input type="checkbox" value={fri} checked={fri} onChange={e=>setFri(!fri)}/>                      
                            </label>
                            <label> S
                                <input type="checkbox" value={sat} checked={sat} onChange={e=>setSat(!sat)}/>                      
                            </label>
                            <label> S
                                <input type="checkbox" name="sun" value={sun} checked={sun} onChange={e=>setSun(!sun)}/>                      
                            </label>

                        </fieldset>






    
                    </div>
                    <div className="button">
                        <button type="submit">Update profile</button>
                    </div>
                </form>
               
    
            </div>
        ) 







}



