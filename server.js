const mongoose = require('mongoose');
const express = require('express');
const app = express();
const http = require('http');
const session = require('cookie-session');

const passport = require('./config/strategies')
const credentials = require('./models/credentials');
const isAuthenticated = require('./config/isAuthenticated');


const home_route = require('./routes/home');
const addprob_route = require('./routes/addprob');
const login_route = require('./routes/login')
const register_route = require('./routes/register')
const incre = require('./routes/incre');


require('dotenv').config()

app.set('views',__dirname+'/views');
app.set('view engine' , 'ejs');
app.use(express.static('views'));
app.use('/scripts',express.static('scripts'));
app.use('/styles' ,express.static('styles'));

//this is to parse the form data that is of type json 
app.use(express.json());
//this is to parse the data from the form of type x-www
app.use(express.urlencoded({
    extended: true
}));

app.use(session({ 
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000000 }
}))


app.use(passport.initialize());
app.use(passport.session());// same as app.use(passport.authenticate('session))
app.use(isAuthenticated);


app.use('/' , register_route);
app.use('/' , addprob_route);
app.use('/' , home_route);
app.use('/' , login_route);
app.use('/' , incre);




const URI = process.env.MONGODBURI;
mongoose.connect(URI,
{useNewUrlParser: true, useUnifiedTopology: true});


const server = http.createServer(app);
PORT = process.env.PORT | 3000
server.listen(PORT , ()=>{
    console.log(`server listed on port ${PORT}`);
});
