const express = require("express");
const router = express.Router();
const upload = require("../Config/muter-config");
const productModel = require("../Models/Product-Model");

router.post("/create", upload.single("image"), async function (req, res) {
 try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    const createproducts = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
  res.status(201).redirect("/owners/admin");
    
 } catch (error) {
    req.send(error.message)
    
 }
});

module.exports = router;
