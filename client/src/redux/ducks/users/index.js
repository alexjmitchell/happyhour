import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_PICTURES = "users/GET_PICTURES"
// initial state
const initialState = {
  users: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return { ...state, users: action.payload }
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
    })
  }
}

function sendFeedback(message, email, name) {
  return dispatch => {
    axios.post("/feedback", { message, email, name }).then(resp => {})
  }
}

// function register(username, password, name, phone, email, dispatch) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post("/register", { username, password, name, phone, email })
//       .then(resp => {
//         login(username, password, dispatch).then(() => {
//           resolve()
//         })
//       })
//       .catch(e => {
//         reject()
//       })
//   })
// }

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)

  const dispatch = useDispatch()

  const get = () => dispatch(getPic())

  const sendF = (message, email, name) => {
    return dispatch(sendFeedback(message, email, name))
  }

  useEffect(() => {
    get()
  }, [dispatch])

  return { users, sendF }
}
