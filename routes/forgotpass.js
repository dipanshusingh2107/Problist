const express = require('express')
const router = express.Router({mergeParams: true});
const nodemailer = require('nodemailer'); 
const Credentials = require('../models/credentials');
const Token = require('../models/token');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const sendEmail = require('../config/sendEmail');


// router.post('/' , (req , res)=>{

//     Credentials.findOne({email:req.body.email}).then((user)=>{
//         newtoken = new Token({username:user.username ,token:uuidv4()});

//         newtoken.save().then(async (token)=>{
//             const link = `${req.get('host')}/password-reset/${token.token}`;
//             console.log(link);
//             await sendEmail(user.email, "Password reset", link);
//             res.send('Password send on the email');
            
//         }).catch((err)=>{
//             console.log(err);
//             res.send('error in creating reset link');
//         });
        
        
//     }).catch((err)=>{
//         console.log(err);
//         res.send('error in finding the user');
//     });
// })


// router.get('/', (req , res)=>{
//     res.render('forgotpass');
// })


router.get('/' , (res , req)=>{
    
    console.log(req.params.token);

})

// router.post('/' , (req , res)=>{
//     Token.find({token:req.params.token}).then((token)=>{
//         User.find({username:token.username}).then(async (user)=>{
//             salt = await bcrypt.genSalt(10);
//             pass = await bcrypt.hash(req.params.pass  ,salt);
            
//             user.password = pass;
//             user.save().then((data)=>{
//                 res.redirect('/');
//             }).catch((err)=>{
//                 res.send(err);
//             })

//         }).catch((err)=>{
//             res.send("something is wrong");
//         })
//     }).catch((err)=>{
//         res.send('Error Wrong Link');
//     })
// })






module.exports = router;
