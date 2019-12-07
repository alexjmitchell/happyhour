import React, { useState} from 'react'
import { useAdmins} from '../hooks'
import {useCompanies} from "../hooks"
import "../styles/forms.css"
import Header from "./Header";
import Footer from "./Footer";
import FileUploader from 'react-firebase-file-uploader'
import firebase from 'firebase'
import config from './FbConfig'

firebase.initializeApp(config)
// import { set } from 'date-fns'


export default props => {
    // const {username} = useAuth()

    const {admins, oneAdmin} = useAdmins()
    const { companies, uploadPic, regProf } = useCompanies()
    const [username, setUsername]=useState(oneAdmin.map(u=>u.username).toString())
    // const [admin_id, setAdmin_id]=useState(Number(oneAdmin.map(u=>u.id).join('')))
    let admin_id=Number(oneAdmin.map(u=>u.id).join(''))
    let lastAdminId = Number(admins[admins.length -1].id)
    const [fromRegForm, setFromRegForm]=useState(oneAdmin.map(u=>u.justRegistered))
    const thecompany = companies.filter(f=>f.admin_id==admin_id)
    const dd=thecompany.map(c =>c.hhdays).join()
    // console.log( dd + " hhdays")

const ddarr=dd.split(",")
// console.log(ddarr.includes("Mo"))



// oneAdmin.map(o=>console.log(o.justRegistered + " hay algo en just registered?"))

    // const [picImg, setPicImg] = useState('')


    const [contactName, setContactName]=useState(oneAdmin.map(u=>u.name).toString())
    const [email, setEmail]=useState(oneAdmin.map(u=>u.email).toString())
    const [phonenumber, setPhone]=useState(oneAdmin.map(u=>u.phone).toString())

    const [compName,setCompName]=useState(thecompany.map(c=>c.companyname).join())
    const [address,setAddress]=useState(thecompany.map(c=>c.address).join())
    const [usstate, setUsState]=useState(thecompany.map(c=>c.state).join())
    const [city,setCity]=useState(thecompany.map(c=>c.city).join())
    const [zip, setZip]=useState(thecompany.map(c=>c.zip).join())
    const [coordinates, setCoordinates]=useState(thecompany.map(c=>c.coordinates).join())
    const [compEmail, setCompEmail]=useState(thecompany.map(c=>c.email).join())
    const [compPhone, setCompPhone]=useState(thecompany.map(c=>c.phone).join())
    const [compWeb,setCompWeb]=useState(thecompany.map(c=>c.website).join())
    const [fb, setFb]=useState(thecompany.map(c=>c.facebook).join())
    const [ig,setIg]=useState(thecompany.map(c=>c.instagram).join())
    const [tw,setTw]=useState(thecompany.map(c=>c.twitter).join())


    const [logo, setLogo]=useState(thecompany.map(c=>c.logo).join())
    const [foodType, setFoodType]=useState(thecompany.map(c=>c.foodType).join())
    const [pic,setPic]=useState(thecompany.map(c=>c.picture).join())
    const [desc, setDesc]=useState(thecompany.map(c=>c.descrip).join())
    const [banner,setBanner]=useState(thecompany.map(c=>c.banner).join())
    const [menu, setMenu]=useState(thecompany.map(c=>c.menu).join())
    const [startHr, setStartHr]=useState(thecompany.map(c=>c.startHr).join())
    const [endHr, setEndHr]=useState(thecompany.map(c=>c.endhour).join())

    const [localUrl, setLocalUrl] = useState('')
    const [isUploading, setIsUploading] = useState(false)

    const [monday, setMonday]=useState(ddarr.includes("Mo")?true:false)
    const [tuesday, setTuesday]=useState(ddarr.includes("Tu")?true:false) 
    const [wed, setWed]=useState(ddarr.includes("We")?true:false) 
    const [thurs, setThurs]=useState(ddarr.includes("Th")?true:false) 
    const [fri, setFri]=useState(ddarr.includes("Fr")?true:false) 
    const [sat, setSat]=useState(ddarr.includes("Sa")?true:false) 
    const [sun, setSun]=useState(ddarr.includes("Su")?true:false) 


        function handleUploadStart(filename) {
            setIsUploading(true)
        }
        function handleProgress(progress) {
        }
        function handleUploadError(error) {
            setIsUploading(false)
        }




        function handleUploadSuccess(filename,e) {
            setLocalUrl('')
            setIsUploading(false)
            firebase
              .storage()
              .ref("flyers")
              .child(filename)
              .getDownloadURL()
              .then(url => {
                  setPic(url)
                })
        }
    
     
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

        

const d=days.join(',')
        

console.log(days)
// console.log(d.join(","))
console.log(oneAdmin)



console.log({
    compName,
    address, city, usstate, zip, compPhone, compEmail, compWeb, fb, ig, tw, coordinates, logo, pic, foodType, menu, desc, d, startHr, endHr, admin_id
})
  




console.log ("ADMIN ID before assign " + admin_id)
console.log ("LAST ADMIN before " + lastAdminId)
console.log ("viene de reg form?  BEFORE " + fromRegForm)



if (fromRegForm=="r")
{
    
    admin_id=lastAdminId
    lastAdminId=0
}

// console.log (oneAdmin.map(u=>u.justRegistered) + " just registeredMMMMM")
// console.log(fromRegForm + " var fromregform")

// console.log(localUrl + " picurllocal")

console.log ("ADMIN ID " + admin_id)
console.log ("LAST ADMIN ID " + lastAdminId)
// console.log ("viene de reg form? " + fromRegForm)
// console.log ("company id? " + thecompany.map(c=>c.id))


regProf(username,compName, address, city, usstate, zip, compPhone, compEmail, compWeb, fb, ig, tw, coordinates, logo, pic, foodType, menu, desc, d, startHr, endHr, admin_id, fromRegForm ) //after signin we want to redirect to another page
        .then((resp)=>{
            //func to send the company
            // getOneC(compName)
            // props.history.push("/test2")
    
        }) 
        .catch(e => {
            
    
            console.log(e + " ERROR")
        })




    }
    
        
        return (
            <>
          <Header/>

            <div className="prof">
                <h1> Welcome, {username}</h1> 
                {/* solo se muestra este component si se ha hecho login */}
                <form onSubmit={handlesubmit}>
                    <div className="profInputs">

                            <div id="profileLeft">
                                <div className="personalContactInputs">
                                    <input type="text" name ="username" placeholder="Username" value={username} disabled/>
                                    <input type="text" name = "contactname" placeholder="Contact name" value={contactName} disabled />
                                    <input type="text" name ="phonenumber" placeholder="Phone Number" value={phonenumber} disabled />
                                    <input type="text" name ="email" placeholder="email" value={email} disabled />
                                </div>
                                {/* <hr></hr> */}
                                <div className="uploadImgsection">
                                    {/* <input type="file" name ="logo" placeholder="logo url**" value={logo} onChange={e=>setLogo(e.target.value)}/>
                                    <img src="https://via.placeholder.com/150C/O https://placeholder.com/"/> */}

                                    {/* <input type="file" name ="pic" placeholder="pic url" value={""} onChange={e=>setPic(e.target.value)}/> */}

                                    <FileUploader
                                        accept="image/*"
                                        name="happy"
                                        randomizeFilename
                                        storageRef={firebase.storage().ref("flyers")}
                                        onUploadStart={handleUploadStart}
                                        onUploadError={handleUploadError}
                                        onUploadSuccess={handleUploadSuccess}
                                        onProgress={handleProgress}
                                        value={localUrl}                    
                                    />

                                    <img className="thumbpics" src={pic}/>

                                    {/* <input type="file" onChange={e=>handleOnchange(e)}/> */}




                                    
                                </div>
                            </div>

                            <div id="right">
                                    <div id="rightTop">
                                        <div className="loactioninputs">
                                        <input type="text" name = "companyname" placeholder="Company name" value={compName} onChange={e=>setCompName(e.target.value)} tabIndex="1" autoFocus/>
                                        <input type="text" name = "address" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} tabIndex="2"/>
                                        <input type="text" name = "state" placeholder="State" value={usstate} onChange={e=>setUsState(e.target.value)} tabIndex="3"/>
                                        <input type="text" name = "city" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} tabIndex="4"/>
                                        <input type="text" name = "zip" placeholder="Zip code" value={zip} onChange={e=>setZip(e.target.value)} tabIndex="5"/>
                                        <input type="text" name = "coordinates" placeholder="google coordinates" value={coordinates} onChange={e=>setCoordinates(e.target.value)} tabIndex="6"/>
                                        <textarea type="text" name="desc" placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)}tabIndex="13"/>
                                    </div>
                                
                                        <div className="contactinputs">
                                        <input type="email" name ="companyemail" placeholder="Company email" value={compEmail} onChange={e=>setCompEmail(e.target.value)} tabIndex="7"/>
                                        <input type="tel" name ="phone" placeholder="Company phone" value={compPhone} onChange={e=>setCompPhone(e.target.value)} tabIndex="8"/>
                                        <input type="url" name ="website" placeholder="Company website" value={compWeb} onChange={e=>setCompWeb(e.target.value) } tabIndex="9"/>
                                        <input type="url" name ="fb" placeholder="Company Facebook" value={fb} onChange={e=>setFb(e.target.value)} tabIndex="10"/>
                                        <input type="url" name ="ig" placeholder="Company Instagram" value={ig} onChange={e=>setIg(e.target.value)} tabIndex="11"/>
                                        <input type="url" name ="tw" placeholder="Company Twitter" value={tw} onChange={e=>setTw(e.target.value)} tabIndex="12"/>
                                        <textarea type="text" name="menu" placeholder="Menu" value={menu} onChange={e=>setMenu(e.target.value)} tabIndex="14"/>

                                    </div>

                                    </div>
                                

                                    <div className="middleBottom">
                                        <div className="dayshr">
                                            <div className="happydays">
                                                
                                                <label> Mo
                                                    <input type="checkbox" value={monday} checked={monday} onChange={e=>setMonday(!monday)} tabIndex="15"/>                      
                                                </label>
                                                <label> Tu
                                                    <input type="checkbox" value={tuesday} checked={tuesday} onChange={e=>setTuesday(!tuesday)} tabIndex="16"/>                      
                                                </label>
                                                <label> We
                                                    <input type="checkbox" value={wed} checked={wed} onChange={e=>setWed(!wed)} tabIndex="17"/>                      
                                                </label>
                                                <label> Th
                                                    <input type="checkbox" value={thurs} checked={thurs} onChange={e=>setThurs(!thurs)} tabIndex="18"/>                      
                                                </label>
                                                <label> Fr
                                                    <input type="checkbox" value={fri} checked={fri} onChange={e=>setFri(!fri)} tabIndex="19"/>                      
                                                </label>
                                                <label> Sa
                                                    <input type="checkbox" value={sat} checked={sat} onChange={e=>setSat(!sat)} tabIndex="20"/>                      
                                                </label>
                                                <label> Su
                                                    <input type="checkbox" name="sun" value={sun} checked={sun} onChange={e=>setSun(!sun)} tabIndex="21"/>                      
                                                </label>

                                            </div>
                                            <div className="hr">
                                                <input type="" name ="starhour" placeholder="start hr**" value={startHr} onChange={e=>setStartHr(e.target.value)} tabIndex="22"/>
                                                <input type="" name ="endhour" placeholder="end hr" value={endHr} onChange={e=>setEndHr(e.target.value)} tabIndex="23"/>
                                            </div>
                                    </div>    
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