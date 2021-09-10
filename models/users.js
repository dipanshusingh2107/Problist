const mongoose = require('mongoose');
const Problems = require('./problems');

users = mongoose.model('users' , {
    username:{
        type:String , 
        required:true
    },
    
    problem: Problems.schema , 
    count:Number 
})


module.exports = users;