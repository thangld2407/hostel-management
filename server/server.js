require('dotenv').config();
require('./config/connectDb');
const session = require("express-session");
const passport = require('passport')
const express = require('express')
const app = express()
const cors = require('cors')

const authRegister = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session({secret: "secret"}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRegister);
app.get('/', (req, res)=>{
    res.send({
        name: 'Thang'
    })
})
const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log("Server is running on PORT", PORT);