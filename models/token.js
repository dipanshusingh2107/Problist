const mongoose = require('mongoose');

Token = mongoose.model('tokens' , {
    username:{
        type: String,
        required:true
    },

    token:{
        type:String,
        required:true
    },

    createdAt:{
        type: Date,
        default: Date.now,
        expires: 3600
    }
});


module.exports = Token;