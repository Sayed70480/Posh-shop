const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Posh-shop");


const userSchema = mongoose.Schema({

})


mongoose.model("user", userSchema);