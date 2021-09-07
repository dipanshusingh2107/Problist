const express = require('express');
const mongoose = require('mongoose');
const category = require('../models/category');
const Problem = require('../models/problems');
const User = require('../models/users')
require('dotenv').config()

const router = express.Router();

const URI = process.env.MONGODBURI;
mongoose.connect(URI,
{useNewUrlParser: true, useUnifiedTopology: true});

router.get('/addprob' ,(req , res)=>{

    category.find({} , (err , result)=>{
        if(err)
        {
            console.log("some error in finding the categories");
        }
        res.render('addprob' , {category:result.sort((a, b) => a.category.localeCompare(b.category))});
    });
       
});

router.post('/addprob' , (req , res)=>{
    probcat = req.body.probcat;
    problink = req.body.link;
    
    prob = new Problem({category:probcat , link:problink});
    prob.save().then((data) =>{
        console.log('entry created');
       
    }).then(()=>{
        const username = req.user.username;

        userProb = new User({username : username , problem:prob , count:0});
        userProb.save().then((data)=>{
            console.log('user entry created');
            res.redirect('/addprob');
        }).catch((err)=>{
            console.log(err);
            res.send('error');
        });
    }).catch((err)=>{
        console.log(err);
        res.send('error');
    })
   
    
    
});

module.exports = router;