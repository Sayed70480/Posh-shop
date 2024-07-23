const express = require("express");
const router = express.Router();
const ownerModel = require("../Models/Owner-Model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res.status(503).send("You don't have Permission to create a new owner");
      } else {
        const { fullname, email, password } = req.body;
        const createdOwner = await ownerModel.create({
          fullname,
          email,
          password,
        });
        return res.status(201).send(createdOwner);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  });
}

router.get("/admin", function (req, res) {
  let success =  req.flash("success");
  res.render("createproducts.ejs", {success});
});

module.exports = router;
