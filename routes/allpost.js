const express = require("express");
const router = express.Router();
const mysqlConnection = require("../src/database");

//Para pedir todos los post
router.get("/getallpost", (req, res) => {
  console.log("por aqui pasa");
  query = `select * from all_posts `;
  mysqlConnection.query(query, [], (err, rows, fields) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log("error: ", err);
      res.json({ status: false });
    }
  });
});

module.exports = router;
