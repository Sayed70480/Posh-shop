const express = require("express");
const router = express.Router();
const {registerUser,loginuser} = require("../Controllers/AuthControllers") 

router.get("/", function (req, res) {
  res.send("users");
});
router.post("/register",  registerUser);
router.post("/login",  loginuser);

module.exports = router;
