import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_DATA = "users/GET_PICTURES"
// const FILTER_TIME = "filter / FILTER_PIC"
// const FILTER_BAR = "filter1 / FILTER_S"
// initial state
const initialState = {
  users: []
  // usersS: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, users: action.payload }
    // case FILTER_BAR:
    //   return { ...state, usersS: action.payload }
    // case FILTER_TIME:
    //   return {
    //     ...state,
    //     users: state.users.filter(p => p.starthour == action.filter1)
    //   }
    default:
      return state
  }
}
// custom  actions

// export function filterBars(time, name, data) {
//   let results = []
//   data.forEach(datee => {
//     if (time !== "" && name !== "") {
//       if (datee.starthour === time && datee.companyname.includes(name)) {
//         results.push(datee)
//       }
//     } else if (time !== "" && name === "") {
//       if (datee.starthour === time) {
//         results.push(datee)
//       }
//     } else if (time === "" && name !== "") {
//       if (datee.companyname.includes(name)) {
//         results.push(datee)
//       }
//     } else if (time === "" && name === "") {
//       results.push(datee)
//     }
//   })
//   return results
// }
// action creators
const getData = () => {
  return dispatch => {
    axios.get("/companies").then(resp => {
      dispatch({
        type: GET_DATA,
        payload: resp.data
      })
    })
  }
}

// const getP = () => {
//   return dispatch => {
//     axios.get("/companies").then(resp => {
//       dispatch({
//         type: FILTER_BAR,
//         payload: resp.data
//       })
//     })
//   }
// }

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

// const filterHours = filter1 => {
//   return {
//     type: FILTER_TIME,
//     filter1: filter1
//   }
// }

// custom hooks

export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  // const usersS = useSelector(appState => appState.userState.usersS)
  const dispatch = useDispatch()
  // const filter = filt1 => dispatch(filterHours(filt1))
  const get = () => dispatch(getData())
  // const getF = () => dispatch(getP())
  const sendF = (message, email, name) => {
    return dispatch(sendFeedback(message, email, name))
  }

  const sendSubs = email => {
    return dispatch(sendSubscrib(email))
  }

  useEffect(() => {
    get()
    // getF()
  }, [dispatch])

  return { users, sendF, sendSubs }
}

// import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"

// // action definitions
// const GET_PICTURES = "users/GET_PICTURES"
// const FILTER_PIC = "filter / FILTER_PIC"
// const FILTER_S = "filter1 / FILTER_S"
// // initial state
// const initialState = {
//   users: [],
//   usersS: []
// }

// // reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_PICTURES:
//       return { ...state, users: action.payload }
//     case FILTER_S:
//       return { ...state, usersS: action.payload }
//     case FILTER_PIC:
//       return {
//         ...state,
//         users: state.users.filter(p => p.starthour == action.filter1)
//       }
//     default:
//       return state
//   }
// }
// // custom  actions

// export function filterBars(time, name, data) {
//   let results = []
//   data.forEach(datee => {
//     if (time !== "" && name !== "") {
//       if (datee.starthour === time && datee.companyname.includes(name)) {
//         results.push(datee)
//       }
//     } else if (time !== "" && name === "") {
//       if (datee.starthour === time) {
//         results.push(datee)
//       }
//     } else if (time === "" && name !== "") {
//       if (datee.companyname.includes(name)) {
//         results.push(datee)
//       }
//     } else if (time === "" && name === "") {
//       results.push(datee)
//     }
//   })
//   return results
// }
// // action creators
// const getPic = () => {
//   return dispatch => {
//     axios.get("/companies").then(resp => {
//       dispatch({
//         type: GET_PICTURES,
//         payload: resp.data
//       })
//     })
//   }
// }

// const getP = () => {
//   return dispatch => {
//     axios.get("/companies").then(resp => {
//       dispatch({
//         type: FILTER_S,
//         payload: resp.data
//       })
//     })
//   }
// }

// function sendFeedback(message, email, name) {
//   return dispatch => {
//     axios.post("/feedback", { message, email, name }).then(resp => {})
//   }
// }

// function sendSubscrib(email) {
//   return dispatch => {
//     axios.post("/subscribers", { email }).then(resp => {})
//   }
// }

// const filterHours = filter1 => {
//   return {
//     type: FILTER_PIC,
//     filter1: filter1
//   }
// }

// // custom hooks

// export function useUsers() {
//   const users = useSelector(appState => appState.userState.users)
//   const usersS = useSelector(appState => appState.userState.usersS)
//   const dispatch = useDispatch()
//   const filter = filt1 => dispatch(filterHours(filt1))
//   const get = () => dispatch(getPic())
//   const getF = () => dispatch(getP())
//   const sendF = (message, email, name) => {
//     return dispatch(sendFeedback(message, email, name))
//   }

//   const sendSubs = email => {
//     return dispatch(sendSubscrib(email))
//   }

//   useEffect(() => {
//     get()
//     getF()
//   }, [dispatch])

//   return { users, sendF, sendSubs, filter, usersS }
// }
