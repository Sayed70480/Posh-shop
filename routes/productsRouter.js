const express = require('express');
const router = express.Router();
const dbgr = require("debug")

router.get("/" , function(req , res){
    res.send("products")
})

dbgr("hello")

module.exports = router