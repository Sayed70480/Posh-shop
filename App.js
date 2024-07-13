const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path")
const db = require("./Config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "Public")));
app.use(cookieParser());
app.set("view engine" ," ejs");


app.use("/owners" , ownersRouter)
app.use("/users" , usersRouter)
app.use("/products" , productsRouter)


app.listen(3000 , function(req, res){
    console.log("it's running");
})