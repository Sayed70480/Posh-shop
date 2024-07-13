const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Posh-shop");


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
    picture : "default.png"

},{
    timestamps  :true,
})



module.exports =  mongoose.model("user", userSchema);