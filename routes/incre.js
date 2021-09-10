const { response } = require('express');
const express = require('express');
const router = express.Router()
const User = require('../models/users')
router.post('/incre' , (req, res)=>{

    probID = req.body.probID;

    User.findById(probID).then((prob)=>{
        prob.count = (prob.count+1) ; 
        prob.save().then((data)=>{
            res.status(200)
            res.json({count: data.count , probID:probID});
        }).catch((err)=>{
            res.status(500);
            res.send('error in saving');
        })

    }).catch((err)=>{
        res.status(500);
        res.send('error in finding');
    });
})


module.exports = router;