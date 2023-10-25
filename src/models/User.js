const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    id:{
        type: String,
        required: true
    },
    username:{
        type: String,
        requried: true
    },
    password:{
        type: String,
        requried: true
    }
}, {collection: "users"});

module.exports = User;
