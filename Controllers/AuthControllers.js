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
                          res.cookie("token", token)
                          return res.status(201).send("user created successfully");
                    }
                });
            });
           }else{
            return res.status(401).send("you already registered")
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
            res.send("you can login")
           }
        });
    }else{
        return res.status(503).send("email and password incorrect")
    }
   } catch (error) {
    res.send(error);
   }
    
}