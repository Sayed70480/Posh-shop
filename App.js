const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path")
const db = require("./Config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
const index = require("./routes/index")
const flash = require("connect-flash");
const expressSession = require("express-session");
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "Public")));
app.use(cookieParser());
app.set("view engine" ," ejs");

app.use(expressSession({
    resave : false,
    saveUninitialized : false,
    secret : process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash());
app.use("/" , index)
app.use("/owners" , ownersRouter)
app.use("/users" , usersRouter)
app.use("/products" , productsRouter)


app.listen(3000 )