const mongoose = require("mongoose");
const config = require("config");
// const dbgr = require("debug")("development:mongoose");

mongoose.connect(`${config.get("MONGOODB_URL")}/Posh-shop`)
.then(function(){
    console.log();("connected");

})
.catch(function(err){
    console.log();(err);
})

module.exports=mongoose.connection;