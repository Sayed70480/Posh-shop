const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    fullname : String,
    email : String,
    password : String,
    cart : {
        type : Array,
        default : [],
    },
    admin : Boolean,
    order : {
        type : Array,
        default : [],
    },
    contact : Number,
    picture : String,

},{
    timestamps  :true,
})



module.exports =  mongoose.model("user", userSchema);