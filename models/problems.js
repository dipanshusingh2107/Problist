const mongoose = require('mongoose');

var problems =  mongoose.model('problems',{
    name: String,
    category:String,
    link:{
        type:String,
        required:true
    },
    extra_info: String
});


module.exports = problems


