const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Posh-shop")
.then(function(){
    console.log("connected");

})
.catch(function(err){
    console.log(err);
})