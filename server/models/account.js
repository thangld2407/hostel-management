const mongoose = require('mongoose');

const account = new mongoose.Schema({

    username: {
        type: String, 
        trim: true,
        required: true,
    }, 
    password: {
        type: String, 
        trim: true,
        required: true
    },
    role: {
        type: String, 
        trim: true,
        required: false
    }

})

module.exports = mongoose.model('account', account);