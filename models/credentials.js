const mongoose = require('mongoose');

cred = mongoose.model('credentials' , {
    name:{
        type:String,
        required:true
    },
    username:{
    type:String , 
    unique:true,
    required:true},

    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})


module.exports = cred;