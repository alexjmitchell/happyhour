import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const ADD_HEART = "liked/ADD_HEART"

// initial state
const initialState = {
  liked: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEART:
      return { ...state, liked: action.payload }
    default:
      return state
  }
}

// action creators
const getLiked = () => {
  return dispatch => {
    axios.get("/companies").then(resp => {
      dispatch({
        type: ADD_HEART,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useLiked() {
  const liked = useSelector(appState => appState.likedState.liked)

  const dispatch = useDispatch()

  const get = () => dispatch(getLiked())

  useEffect(() => {
    get()
  }, [dispatch])

  return { liked }
}
