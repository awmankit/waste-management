const mongoose = require("mongoose");
const validator = require("validator");

const  userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true,
        minLength:3
    },
    address: {
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    

})

const User = mongoose.model("User",userSchema);


module.exports = User;
