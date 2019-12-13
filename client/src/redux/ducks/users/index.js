import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_PICTURES = "users/GET_PICTURES"
const FILTER_PIC = "filter / FILTER_PIC"

// initial state
const initialState = {
  users: [],
  filteredUsers: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return { ...state, users: action.payload, filteredUsers: action.payload }
    case FILTER_PIC:
      return {
        ...state,
        filteredUsers: filterCompanies(action.payload, state.users)
      }
    default:
      return state
  }
}

function filterCompanies(filterobj, users) {
  let { search, val } = filterobj

  if (!search) {
    search = ""
  }

  if (!val) {
    val = ""
  }
  // bar.companyname
  // bar.starthoure
  // bar.endhour

  let f = users.filter(bar => {
    if (search && val) {
      return (
        bar.companyname == search && val > bar.starthour && val < bar.endhour
      )
    }

    if (search && !val) {
      return bar.companyname == search
    }

    if (val && !search) {
      return val > bar.starthour && val < bar.endhour
    }
  })

  return f
}

// action creators
const getPic = () => {
  return dispatch => {
    axios.get("/companies").then(resp => {
      dispatch({
        type: GET_PICTURES,
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

const filterBarsAction = filterobj => {
  return {
    type: FILTER_PIC,
    payload: filterobj
  }
}

// custom hooks

export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const filteredUsers = useSelector(
    appState => appState.userState.filteredUsers
  )
  const dispatch = useDispatch()
  const filterBars = filteredobj => dispatch(filterBarsAction(filteredobj))
  const get = () => dispatch(getPic())
  const sendF = (message, email, name) => {
    return dispatch(sendFeedback(message, email, name))
  }

  const sendSubs = email => {
    return dispatch(sendSubscrib(email))
  }

  useEffect(() => {
    get()
  }, [dispatch])

  return { users, sendF, sendSubs, filterBars, filteredUsers }
}
