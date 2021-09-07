const mongoose = require('mongoose');

category = mongoose.model('category' ,{
    category:{type:String , required:true,unique: true}
},);


module.exports = category;