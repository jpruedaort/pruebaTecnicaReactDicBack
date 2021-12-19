const express = require("express");
const router = express.Router();
const mysqlConnection = require("../src/database");

//Para borrar un post
router.delete("/deletepost", (req, res) => {
  console.log("Delete");
  query = `delete from all_posts where post_id=${req.body.post_id}`;
  mysqlConnection.query(query, [], (err, rows, fields) => {
    if (!err) {
      res.json({ status: true });
    } else {
      console.log("error: ", err);
      res.json({ status: false });
    }
  });
});

module.exports = router;
