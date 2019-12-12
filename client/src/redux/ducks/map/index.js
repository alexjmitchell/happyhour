import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

import axios from 'axios'
// action definitions
const GET_LATLONG = "map/GET_LATLONG"
const GET_PLACES = "map/GET_PLACES"
const initialState = {
    coordinates:{},
    places: []
   }
// reducer(s)
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LATLONG:
            return { ...state, coordinates: action.payload }
        case GET_PLACES:
            return { ...state, places: action.payload }
        default:
            return state
    }
}
// actions
const getCoordinates = () => {
    return dispatch => {
      axios.post("/map/coordinates").then(resp => {
        dispatch({
          type: GET_LATLONG,
          payload: resp.data
        })
      })
    }
  }


  const getPlaces = (coordinates) => {
    const lat = coordinates.lat
    const lng = coordinates.lng
    return dispatch => {
      axios.get(`/map/places/${lat}/${lng}`).then(resp => {
        console.log("ryan",resp.data)
        dispatch({
          type: GET_PLACES,
          payload: resp.data
        })
      })
    }
  }



  
  


export function useMaps() {
    const dispatch = useDispatch()

    const coordinates = useSelector(appState => appState.mapState.coordinates)
    const places = useSelector(appState => appState.mapState.places)
    // const getLocs = coordinates=>dispatch(getPlaces(coordinates))


// const fetch = () =>{
//   dispatch(getCoordinates)
// }

// useEffect(()=>{
//   fetch ()
// },[])
    useEffect(() => {
        dispatch(getCoordinates())
       dispatch(getPlaces(coordinates))
      }, [dispatch])
    return { coordinates, places }
}