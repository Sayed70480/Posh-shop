const express = require("express");
const router = express.Router();
const {registerUser,loginuser ,logoutuser} = require("../Controllers/AuthControllers"); 
const { isLoggied } = require("../Middlewares/isLoggied");

router.get("/", function (req, res) {
  res.send("users");
});
router.post("/register",  registerUser);
router.post("/login",  loginuser);
router.get("/logout", isLoggied, logoutuser);

module.exports = router;
