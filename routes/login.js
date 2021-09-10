const express = require('express');
const passport = require('../config/strategies');
const router = express.Router();


router.get('/' , (req , res)=>{
    res.render('login')
})

router.post('/',passport.authenticate('localStrategy',{successRedirect: '/home',failureRedirect: '/'}),()=>{console.log('hiii')})



module.exports = router;