const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path")


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "Public")));
app.use(cookieParser());
app.set("view engine" ," ejs");


app.get("/", function(req, res){
    res.send("home")
})


app.listen(3000 , function(req, res){
    console.log("it's running");
})