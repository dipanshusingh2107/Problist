const express = require('express');
const mongoose = require('mongoose');
const category = require('../models/category');
const problems = require('../models/problems');
const Problem = require('../models/problems')
const User = require('../models/users')

require('dotenv').config()

const router = express.Router()


const URI = process.env.MONGODBURI;

mongoose.connect(URI,
{useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.set("useCreateIndex", true);


router.post('/home' , (req , res)=>{
    new_catagory  = new category({category : req.body.catname});
    new_catagory.save((err , data)=>{
        if(err)
        {
            console.log("some error occured in creating new category");
        }
    });

    res.redirect('/home');
    
})

router.get('/home',async (req , res)=>{
     // categeory:string , prob: arrray
    let data=await category.find({})
    let probcat=[]


    for(let i=0;i<data.length;i++)
    {
        let element=data[i];

        let something = []
        try{
        something = await User.find({username:req.user.username  ,'problem.category':element.category})
        }
        catch(err)
        {
            res.redirect('/');
        }


        probstopass = []
        for(j =0 ;j<something.length ;j++)
        {
            probstopass.push({link:something[j].problem.link , count:something[j].count,id:something[j]._id});
        }

        if(probstopass.length)
        probcat.push({category:element.category , prob:probstopass});
        
    }
    
    
    res.render('home' , {cat:probcat});
    
       
});





module.exports = router ;