require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");   
const newToken = (user)=>{
    return jwt.sign({user}, "")
}
const register = async(req, res)=>{
    try{
        let user = await User.findOne({email : req.body.email}).lean().exec();
        if(user){
            return res.status(404).send("User already exists");
        }
        user = await User.create(req.body);
        const token = newToken(user);


        return res.status(201).send(user);
        
    }catch(err){
        return res.status(500).send({Error : err.message});
    }
}

const login = async (req, res)=>{
    try{
        res.send("login")
        
    }catch(err){
        return res.status(500).send({Error : err.message});
    }
}

module.exports = {register, login}