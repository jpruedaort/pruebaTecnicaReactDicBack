const express = require("express");
const app = express();

//configuración
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//CORS

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//rutas

//Obteber Post
const getPost = require("../routes/allpost");
app.use("/getpost", getPost);

//Borrar Post
const delpost = require("../routes/deletepost");
app.use("/delpost", delpost);

//Para like y Dislike
const likeDislike = require("../routes/likedislike");
app.use("/likedislike", likeDislike);

//Para crear nuevo post
const newPost = require("../routes/newpost");
app.use("/newpost", newPost);

//Iniciar servicio
app.listen(app.get("port"), () => {
  console.log("Servidor en puerto ", app.get("port"));
});
