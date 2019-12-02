const router = require("express").Router()
const uuid = require ("uuid/v4")
const sha512 = require ("js-sha512")
const db = require('../db')
const jwt = require ('jsonwebtoken') 
const config = require('config') 


router.post("/register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const password = sha512(req.body.password + salt)
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email

  console.log(name + " contactname")
  console.log(phone + " phone")
  console.log(email + " email")


  // *********************
  const sql = 'INSERT INTO admins (username, password, salt, name, phone, email) VALUES (?,?,?,?,?,?)'
  
    db.query(sql, [username, password, salt, name, phone, email], (err, results, fields)=>{
        if(err){
          throw new Error (err)
        }
        res.json({
          message: "User created",
          results
        })

      })
  })

// *************************

router.post('/login', (req, res, next) =>{
  const username = req.body.username
  let password = req.body.password //

  db.query('SELECT salt FROM admins WHERE username=?',[username], (err, results, fields)=>{
    if(results.length > 0) {
      password = sha512(password + results[0].salt)

      //to see if the user record exists. if exists we will have back 1, if not 0
      const sql =`SELECT count(1) as count FROM admins WHERE username =? AND password = ?` 
      db.query(sql,[username, password], (err,results, fields) =>{

        if(results[0].count>0){

          const token = jwt.sign({username}, config.get('secret'))

          res.json({
            message: "Authenticated",
            token // token:token
          })

          }else{
            res.status(401).json({
            message: "Username or Password are incorrect"
             })
          }

        })

      } else{
        res.status(401).json({
        message: "User doesn't exist"
        })
        }


    })

})

router.get("/admins",(req,res,next)=>{
  const sql = `
  SELECT id, username, name, phone, email FROM admins`
  db.query(sql, (err,results,fields)=>{
    res.json(results)
  })

  
})


// router.get("/oneadmin")


// ********************************

// })

module.exports = router
