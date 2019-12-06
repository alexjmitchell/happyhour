const router = require("express").Router()
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const db = require("../db")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const password = sha512(req.body.password + salt)
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email

  // *********************
  const sql =
    "INSERT INTO admins (username, password, salt, name, phone, email) VALUES (?,?,?,?,?,?)"

  db.query(
    sql,
    [username, password, salt, name, phone, email],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      }
      res.json({
        message: "User created",
        results
      })
    }
  )
})

// *************************

router.post("/login", (req, res, next) => {
  const username = req.body.username
  let password = req.body.password //

  db.query(
    "SELECT salt FROM admins WHERE username=?",
    [username],
    (err, results, fields) => {
      if (results.length > 0) {
        password = sha512(password + results[0].salt)

        //to see if the user record exists. if exists we will have back 1, if not 0
        const sql = `SELECT count(1) as count FROM admins WHERE username =? AND password = ?`
        db.query(sql, [username, password], (err, results, fields) => {
          if (results[0].count > 0) {
            const token = jwt.sign({ username }, config.get("secret"))

            res.json({
              message: "Authenticated",
              token // token:token
            })
          } else {
            res.status(401).json({
              message: "Username or Password are incorrect"
            })
          }
        })
      } else {
        res.status(401).json({
          message: "User doesn't exist"
        })
      }
    }
  )
})

router.get("/admins", (req, res, next) => {
  const sql = `
  SELECT id, username, name, phone, email FROM admins`
  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

router.get("/companies", (req, res, next) => {
  const sql = `
  SELECT picture, companyname FROM companies`

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

///*********************** */

router.post("/profile", (req, res, next) => {
  const companyname = req.body.companyname
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const zip = req.body.zip
  const phone = req.body.phone
  const email = req.body.email
  const website = req.body.website
  const coordinates = req.body.coordinates
  const logo = req.body.logo
  const picture = req.body.picture
  const facebook = req.body.facebook
  const instagram = req.body.instagram
  const twitter = req.body.twitter
  // const banner = req.body.state
  const foodtype = req.body.foodtype
  const menu = req.body.menu
  const descript = req.body.descript
  const hhdays = req.body.hhdays
  const starthour = req.body.starthour
  const endhour = req.body.endhour
  const admin_id = req.body.admin_id
  // const username = req.body.username

  console.log({
    companyname,
    address,
    city,
    state,
    zip,
    phone,
    email,
    website,
    facebook,
    instagram,
    twitter,
    coordinates,
    logo,
    picture,
    foodtype,
    menu,
    descript,
    hhdays,
    starthour,
    endhour,
    admin_id
  })

  // *********************
  const sql =
    "INSERT INTO companies (companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, descrip, hhdays, starthour, endhour, admin_id ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"

  db.query(
    sql,
    [
      companyname,
      address,
      city,
      state,
      zip,
      phone,
      email,
      website,
      facebook,
      instagram,
      twitter,
      coordinates,
      logo,
      picture,
      foodtype,
      menu,
      descript,
      hhdays,
      starthour,
      endhour,
      admin_id
    ],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      }
      res.json({
        message: "company created",
        results
      })
    }
  )
})

//getting all the companies profiles
router.get("/gprofile", (req, res, next) => {
  const sql = `
    SELECT companyname, address, city, state, zip, phone, email, website, facebook, instagram, twitter, coordinates, logo, picture, foodtype, menu, descrip, hhdays, starthour, endhour, admin_id FROM companies`
  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

router.put("/gprofile", (req, res, next) => {
  const companyname = req.body.companyname
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const zip = req.body.zip
  const phone = req.body.phone
  const email = req.body.email
  const website = req.body.website
  const coordinates = req.body.coordinates
  const logo = req.body.logo
  const picture = req.body.picture
  const facebook = req.body.facebook
  const instagram = req.body.instagram
  const twitter = req.body.twitter
  // const banner = req.body.state
  const foodtype = req.body.foodtype
  const menu = req.body.menu
  const descript = req.body.descript
  const hhdays = req.body.hhdays
  const starthour = req.body.starthour
  const endhour = req.body.endhour
  const admin_id = req.body.admin_id

  console.log(req.body)

  const sql = `
    UPDATE companies
    set 
    companyname = ?, 
    address=?, 
    city=?,
    state=?, 
    zip=?,
    phone=?, 
    email=?, 
    website=?, 
    facebook=?, 
    instagram=?, 
    twitter=?, 
    coordinates=?, 
    logo=?, 
    picture=?, 
    foodtype=?, 
    menu=?, 
    descrip=?, 
    hhdays=?, 
    starthour=?, 
    endhour=?, 
    admin_id=? 
    WHERE admin_id=?`

  db.query(
    sql,
    [
      companyname,
      address,
      city,
      state,
      zip,
      phone,
      email,
      website,
      facebook,
      instagram,
      twitter,
      coordinates,
      logo,
      picture,
      foodtype,
      menu,
      descript,
      hhdays,
      starthour,
      endhour,
      admin_id,
      admin_id
    ],
    (err, results, fields) => {
      res.json(results)
    }
  )
})

///*********************** */

router.post("/feedback", (req, res, next) => {
  let message = req.body.message
  let email = req.body.email
  let name = req.body.name

  const sql = `
  INSERT INTO feedback ( message, email, name ) VALUES (?,?,?)`

  db.query(sql, [message, email, name], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json({
      message: "Feedback Sent",
      results
    })
  })
})

module.exports = router
