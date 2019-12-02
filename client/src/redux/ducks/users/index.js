import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// import {useAuth} from '../hooks'


// const {username} = useAuth()

// action definitions
const GET_ADMINS = "users/GET_ADMINS"
const GET_ONEADMIN = "users/GET_ONEADMIN"
//const GET_COMPANIES = "users/GET_COMPANIES"

// initial state
const initialState = {
  admins: [],
  oneAdmin: [],
  profile:{}

}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMINS:
      return { ...state, admins: action.payload }
    case GET_ONEADMIN:
      return {...state, oneAdmin:state.admins.filter(e=>e.username == action.payload)}
    default:
      return state
  }
}

// action creators
const getAdmins = () => {
  return dispatch => {
    axios.get("/admins").then(resp => {
      dispatch({
        type: GET_ADMINS,
        payload: resp.data
      })
    })
  }
}



//too many re renders in profile. var gets value late so it doesn't display on time. trying here

const getOneAdmin = (user)=>{

  return dispatch => {

    dispatch ({
      type:GET_ONEADMIN,
      payload:user
    })

  }
}


// custom hooks
export function useUsers() {
  const admins = useSelector(appState => appState.userState.admins)
  const oneAdmin = useSelector(appState => appState.userState.oneAdmin)
  const dispatch = useDispatch()
  const getone = user=>dispatch(getOneAdmin(user))

  useEffect(() => {
    dispatch(getAdmins())
  }, [dispatch])

  return { admins, getone, oneAdmin }
}
