const express = require("express");
const router = express.Router();
const mysqlConnection = require("../src/database");

//Agregar Like
router.post("/addlike", (req, res) => {
  console.log("agregar Like");
  query = `set @post_id=${req.body.post_id};
update all_posts set post_like = post_like + 1 where post_id=@post_id;
update all_posts set post_had_like = true where post_id=@post_id;`;
  mysqlConnection.query(query, [], (err, rows, fields) => {
    if (!err) {
      res.json({ status: true });
    } else {
      console.log("error: ", err);
      res.json({ status: false });
    }
  });
});

//Quitar Like
router.post("/removelike", (req, res) => {
  console.log("agregar Like");
  query = `set @post_id=${req.body.post_id};
update all_posts set post_like = post_like - 1  where post_id=@post_id;
update all_posts set post_had_like = false  where post_id=@post_id;`;
  mysqlConnection.query(query, [], (err, rows, fields) => {
    if (!err) {
      res.json({ status: true });
    } else {
      console.log("error: ", err);
      res.json({ status: false });
    }
  });
});

//Agregar Dislike
router.post("/addislike", (req, res) => {
  console.log("agregar Like");
  query = `set @post_id=${req.body.post_id};
update all_posts set post_dislike = post_dislike + 1  where post_id=@post_id;
update all_posts set post_had_dislike = true  where post_id=@post_id;`;
  mysqlConnection.query(query, [], (err, rows, fields) => {
    if (!err) {
      res.json({ status: true });
    } else {
      console.log("error: ", err);
      res.json({ status: false });
    }
  });
});

//Quitar Dislike
router.post("/removedislike", (req, res) => {
  console.log("agregar Like");
  query = `set @post_id=${req.body.post_id};
update all_posts set post_dislike = post_dislike - 1  where post_id=@post_id;
update all_posts set post_had_dislike = false  where post_id=@post_id;`;
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
