const express = require("express");
const router = express.Router();
const mysqlConnection = require("../src/database");

//Para crear un nuevo Post
router.post("/addnewpost", (req, res) => {
  payload = req.body;
  query = `INSERT INTO all_posts (post_name , post_content, post_date , post_like , post_dislike)
  values ('${payload.post_name}' , '${payload.post_content}' , '${payload.post_date}', 0 , 0);`;
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
