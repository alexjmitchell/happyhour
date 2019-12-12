const router = require ('express').Router()
const axios = require('axios')
const db = require("../db")

router.post("/coordinates", (req, res, next) => {
    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk').then(resp =>{
//grabing the coordinates from the api. only post      //
      const coord=resp.data.location
      res.json(coord)
    })
    
  })


  // router.get("/places/:lat/:lng", (req, res, next) => {

    // router.post("/places/:name", (req, res, next) => {
    //   const lat = req.params.lat
    //   const long =req.params.lng
    //   // const name=req.params.name   
    //     axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk`).then(resp =>{
        
    // // if (resp.data.results){
    //       const places=resp.data.results[0].geometry.location
    //   // }
    //       res.json(places)
    //     })
        
    //   })
    






  router.put("/places/:name", (req, res, next) => {
  // const lat = req.params.lat
  // const long =req.params.lng
  const companyname=req.params.name    
  let lat=0
  let lng=0
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${companyname}&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk`).then(resp =>{
    
          lat = places=resp.data.results[0].geometry.location.lat
          lng = places=resp.data.results[0].geometry.location.lng
          res.json(results) //**** */
        })

  const sql = `UPDATE companies set lat = ?, lng=? WHERE companyname=?`

      db.query( sql, [lat, lng ], (err,results,fields)=>{
          res.json(results)
        })    
  })


  

//   https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk


//post
// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCDavrh1NwCNrAAw8DyMi21XpGTrfQCslk


module.exports = router 