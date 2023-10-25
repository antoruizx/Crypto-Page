const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const userModel = mongoose.model("User", User);
const bcrypt = require("bcryptjs");
const SECRET_JWT_KEY = "bWlsbGF2ZQ=="
const jwt = require("jsonwebtoken");

const login = async (user) => {
    try{
    const userResponse = await userModel.findOne({ username: `${user.username}` });
    let token = null;
    if(userResponse && user.password == userResponse.password){
        token = jwt.sign({ username: user.username }, SECRET_JWT_KEY, { expiresIn: "20s"} );
    }
    return token;
    }catch(error){
        console.log(error);
    }
}

module.exports = { login };
