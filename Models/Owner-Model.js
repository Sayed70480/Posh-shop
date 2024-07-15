const mongoose = require("mongoose")


const ownerSchema = mongoose.Schema({

    fullname : String,
    email : String,
    password : String,
    admin : Boolean,
    product : {
        type : Array,
        default : [],
    },
    picture : String,
    gstin : String,

},{
    timestamps  :true,
})



module.exports =  mongoose.model("owner", ownerSchema);