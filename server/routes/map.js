const router = require ('express').Router()
const axios = require('axios')

router.post("/coordinates", (req, res, next) => {
    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk').then(resp =>{
//grabing the coordinates from the api. only post      //
      const coord=resp.data.location
      res.json(coord)
    })
    
  })



  router.get("/places/:lat/:lng", (req, res, next) => {
  const lat = req.params.lat
  const long =req.params.lng

  // axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}+&radius=1500+&type=restaurant+&keyword=mexican
  // &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk`).then(resp =>{
    
    // axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}+&radius=1500+&type=restaurant+&keyword=mexican
    // &key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk`).then(resp =>{
    

    axios.post(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar+restaurant&location=${lat},${long}&radius=200&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk`).then(resp =>{
    //   const coord=resp.data.location //
      
      const places=resp.data.results
      res.json(places)
    })
    
  })


  

//   https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk


//post
// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk


module.exports = router 