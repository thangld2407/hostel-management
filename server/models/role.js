const mongoose = require("mongoose");

const role = new mongoose.Schema({
    role_name: {
        type: String,
        trim: true,
        required: true
    },
    permission: {
        type: String,
        trim: true,
        required: true,
    }
})

module.exports = mongoose.model('Role', role)