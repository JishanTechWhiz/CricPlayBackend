const mongoose = require("mongoose");

var userSchema  = new mongoose.Schema({

    Fullname:{
        type: String,
        required:[true, 'Please Enter Full Name.']
    },
    Email:{
        type:String,
        required:[true, 'Please Enter Email Address.']
    },
    Phone:{
        type:String,
        required:[true, 'Please Enter Phone Number.']
    },
    Password:{
        type:String,
        required:[true, 'Please Enter Password']
    },
    ConfirmPassword:{
        type:String,
        required:[true, 'Please Enter Password.']
    },
    Fname:{
        type:String
    },
    Lname:{
        type:String
    },
    Gender:{
        type:String
    },
    DOB:{
        type:Date
    }
});

module.exports = mongoose.model('UserData',userSchema)
