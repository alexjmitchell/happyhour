import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// action definitions
const GET_PICTURES = "users/GET_PICTURES";

// initial state
const initialState = {
  users: []
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

// action creators
const getPic = () => {
  return dispatch => {
    axios.get("/companies").then(resp => {
      dispatch({
        type: GET_PICTURES,
        payload: resp.data
      });
    });
  };
};

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users);

  const dispatch = useDispatch();

  const get = () => dispatch(getPic());

  useEffect(() => {
    get();
  }, [dispatch]);

  return { users };
}
