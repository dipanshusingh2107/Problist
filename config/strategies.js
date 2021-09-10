const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const credentials = require('../models/credentials');
const bcrypt = require('bcryptjs');


strat =  (username , password , done)=>{
    credentials.findOne({ username: username },async (err,user)=>{
    if(err)
    return done(err);

    if (!user) {
        return done(null, false, { message: 'Incorrect username' });
    }

    isValid = await bcrypt.compare(password , user.password)
    if (!isValid) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
    })
}


const localStrategy = new LocalStrategy({usernameField: 'username',
passwordField: 'password',
session: true} ,strat)

passport.use('localStrategy' , localStrategy);

passport.serializeUser((user, done)=> {
    done(null, user.username);
});
  
passport.deserializeUser((id, done)=> {
    credentials.findOne({username:id},(err, user)=> {
        done(err, user);
    });
});

module.exports = passport;