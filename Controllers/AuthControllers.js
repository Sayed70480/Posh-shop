const userModel = require("../Models/User-Model");
const bcrypt = require("bcrypt")
const saltRounds = 10;
const {generateJwtToken} = require("../utils/GenerateJwtToken")
module.exports.registerUser = async (req ,res) =>{
    try {
        let { fullname, email, password } = req.body;
           const checkuser = await userModel.findOne({email : email})

           if(!checkuser){
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, async function(err, hash) {
                    if(err) {
                        return res.send(err.message);
                    }else{
                        const createUser = await userModel.create({
                            fullname,
                            email,
                            password : hash,
                          });
                        const token = generateJwtToken(createUser)
                          res.cookie("token", token);
                          req.flash("error" , "Now you can login")
                          return res.status(201).redirect("/");
                    }
                });
            });
           }else{
            req.flash("error","You already have account, please login")
            res.redirect("/")
           }
      
        
      } catch (err) {
        res.send(err.message);
      }
}

module.exports.loginuser=async (req ,res) =>{
   try {
    const {email , password } = req.body;
    const user = await userModel.findOne({email : email});
    if(user){
        bcrypt.compare(password, user.password, function(err, result) {
           if(result){
            let token = generateJwtToken(user);
            res.cookie("token" , token)
          res.redirect("/shop")
           }
        });
    }else{
        req.flash("error" , "email and password incorrect" )
        res.redirect("/")
    }
   } catch (error) {
    res.send(error);
   }
    
}

module.exports.logoutuser= async (req , res) =>{
    res.cookie("token" , "");
    res.redirect("/")

}