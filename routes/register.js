const express = require('express');
const Credentials = require('../models/credentials')
const bcrypt = require('bcryptjs');

router = express.Router();

router.get('/register' , (req , res)=>{
    res.render('register');
})


router.post('/register' ,async (req , res)=>{

    salt = await bcrypt.genSalt(10);
    pass = await bcrypt.hash(req.body.password  ,salt);
    cred = new Credentials({name:req.body.name , username:req.body.username,password: pass});
    cred.save((err,data)=>{
        if(err)
        {
            console.log(err);
            res.send('error');
            return ;
        }

        res.redirect('/');
    })

})



module.exports = router;