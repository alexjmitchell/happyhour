import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_PICTURES = "users/GET_PICTURES"

const FILTER_PIC = "filter / FILTER_PIC"
// const GET_HOURS = "hours/GET_HOURS"
// initial state
const initialState = {
  users: []
  // filters: [],
  // hours: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return { ...state, users: action.payload }
    case FILTER_PIC:
      return {
        ...state,
        users: state.users.filter(p => p.starthour == action.filter1)
      }
    default:
      return state
  }
}

// action creators
const getPic = () => {
  return dispatch => {
    axios.get("/companies").then(resp => {
      dispatch({
        type: GET_PICTURES,
        payload: resp.data
      })
      // dispatch(getHours(resp.data))
      // console.log(getHours, "fff")
    })
  }
}

const getH = potato => {
  return dispatch => {
    axios.get("/specials/" + potato).then(resp => {
      dispatch({
        type: GET_HOURS,
        payload: resp.data
      })
    })
  }
}

function sendFeedback(message, email, name) {
  return dispatch => {
    axios.post("/feedback", { message, email, name }).then(resp => {})
  }
}

function sendSubscrib(email) {
  return dispatch => {
    axios.post("/subscribers", { email }).then(resp => {})
  }
}

// const getHours = users => {
//   let arr = []

//   users.forEach(p => {
//     arr = arr.concat(p.availableHours)
//   })

//   const unique = Array.from(new Set(arr))

//   return {
//     type: GET_HOURS,
//     payload: unique
//   }
// }

const filterHours = filter1 => {
  return {
    type: FILTER_PIC,
    filter1: filter1
  }
}

// custom hooks

export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  // const hours = useSelector(appState => appState.userState.hours)
  const dispatch = useDispatch()
  const filter = filt1 => dispatch(filterHours(filt1))
  const get = () => dispatch(getPic())
  const time = potato => dispatch(getH(potato))

  const sendF = (message, email, name) => {
    return dispatch(sendFeedback(message, email, name))
  }

  const sendSubs = email => {
    return dispatch(sendSubscrib(email))
  }

  useEffect(() => {
    get()
    // time()
  }, [dispatch])

  return { users, sendF, sendSubs, time, filter }
}
