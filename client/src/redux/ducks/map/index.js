import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

import axios from 'axios'
// action definitions
const GET_LATLONG = "map/GET_LATLONG"
const GET_PLACE = "map/GET_PLACES"
const initialState = {
    coordinates:{},
    lat:0,
    lng:0

    // onePlaceCoords:{}
   }
// reducer(s)
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LATLONG:
            return { ...state, coordinates: action.payload }
        case GET_PLACE:
        return { ...state, lat: action.lat, lng:action.lng }
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


  // const getPlaces = (name) => {
  //   console.log(name + " actionreduxname")
  //   return dispatch => {
  //     axios.get(`/map/places/${name}`).then(resp => {
  //       console.log("ryan",resp.data)
  //       dispatch({
  //         type: GET_PLACES,
  //         payload: resp.data
  //       })
  //     })
  //   }
  // }




  function getPlace (name, dispatch) {
          return new Promise((resolve, reject) => {
              console.log(name + " actionreduxname")
              axios.get(`/map/places/${name}`).then(resp => {
                // console.log("ryan",resp.data)
                    dispatch({
                      type: GET_PLACE,
                      lat: resp.data.lat,
                      lng:resp.data.lng
                    })
                    resolve()
          
                 }).catch(e=>{
                    console.log("didn't find the place")
                    reject()
                    })
              })
      }




      


    
  



  // const getPlaces = (coordinates) => {
  //   const lat = coordinates.lat
  //   const lng = coordinates.lng
  //   return dispatch => {
  //     axios.get(`/map/places/${lat}/${lng}`).then(resp => {
  //       console.log("ryan",resp.data)
  //       dispatch({
  //         type: GET_PLACES,
  //         payload: resp.data
  //       })
  //     })
  //   }
  // }



  
  


export function useMaps() {
    const dispatch = useDispatch()
    const coordinates = useSelector(appState => appState.mapState.coordinates)
    // const onePlaceCoords = useSelector(appState => appState.mapState.onePlaceCoords)
    // const getLoc = name=>dispatch(getPlaces(name))
    const getLoc = (name) => getPlace(name, dispatch)

    // console.log(onePlaceCoords + "oneplaceCoords")


    useEffect(() => {
        dispatch(getCoordinates())
      //  dispatch(getPlaces(coordinates))
      }, [dispatch])
    return { coordinates, getLoc }
}