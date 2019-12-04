import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"


// action definitions
const GET_COMPANIES = "users/GET_COMPANIES"
const GET_ONECOMPANY = "users/GET_ONECOMPANY"
// const GET_REGISTERED = "users/GET_REGISTERED"
//const GET_COMPANIES = "users/GET_COMPANIES"

// initial state
const initialState = {
  companies: [],
//   oneCompany: [],
oneCompany:''
//   company:{}

}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, companies: action.payload }
    case GET_ONECOMPANY:
            return {...state, oneCompany:action.payload}
       default:
      return state
  }
}

// action creators
const getCompanies = () => {
  return dispatch => {
    axios.get("/gprofile").then(resp => {
      dispatch({
        type: GET_COMPANIES,
        payload: resp.data
      })
    })
  }
}




const getOneCompany = (companyname)=>{
console.log ("hooks " + companyname )
  return dispatch => {

    dispatch ({
      type:GET_ONECOMPANY,
      payload:companyname
    })

  }
}


//update profile

function regProfile(username, companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, description, hhdays, starthour, endhour, admin_id) {

if (admin_id==0)
{
    console.log("company doesn't exist")
    return new Promise((resolve, reject) => {
        axios
            .post("/profile", {username, companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, description, hhdays, starthour, endhour, admin_id })
            .then(resp => {

                   resolve()  
                

            })
            .catch(e => {
                reject()
            })
         })

}else{
    console.log("company exists")

    return new Promise((resolve, reject) => {

                axios
                    .put("/gprofile", {username, companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, description, hhdays, starthour, endhour, admin_id })
                    .then(resp => {
        
                           resolve()  
                        
        
                    })
                    .catch(e => {
                        reject()
                    })
            })

}

    

    
}




// custom hooks
export function useCompanies() {
  const companies = useSelector(appState => appState.companyState.companies)
  const oneCompany = useSelector(appState => appState.companyState.oneCompany)
  console.log(oneCompany + " usecompanies hooks function")
  const dispatch = useDispatch()
  const getOneC = companyname=>dispatch(getOneCompany(companyname))

const regProf = (username,companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, description, hhdays, starthour, endhour, admin_id) => {
    return regProfile(username,companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, description, hhdays, starthour, endhour, admin_id)
}





  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  return { companies, oneCompany, regProf, getOneC }
}
