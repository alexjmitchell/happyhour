const router = require("express").Router();
const db = require("../db");

router.get("/companies", (req, res, next) => {
  const sql = `
  SELECT picture FROM companies`;

  db.query(sql, (err, results, fields) => {
    res.json(results);
  });
});

// router.post("/companies", (req, res, next) => {
//   let picture = req.body.picture;

//   const sql = `
//   INSERT INTO companies.picture VALUES ('${picture})`;

//   db.query(sql, (err, results, fields) => {
//     console.log("error", err);
//     console.log(results);
//     res.json(results);
//   });
// });

module.exports = router;
