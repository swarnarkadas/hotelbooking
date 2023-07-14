const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{                   
        type: String,
        required:true
    },
    isAdmin:{                  
        type: Boolean,
        default:false      
    },

},{timestamps:true});     //basically its gonna give 'createdAt' and 'updatedAt' time

const User = mongoose.model("User",UserSchema);
module.exports = User;