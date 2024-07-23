const express = require('express');
const { isLoggied } = require('../Middlewares/isLoggied');
const productModel = require('../Models/Product-Model');
const router = express.Router();


router.get("/" , function(req , res){
    let error =  req.flash("error");
    res.render("index.ejs", {error})
})

router.get("/shop", isLoggied , async function(req,res){
   let  products = await productModel.find();
res.render("shop.ejs" , {products});
})

module.exports = router