const mongoose = require("mongoose");

const user = new mongoose.Schema({
  room_id: {
    type: String,
    trim: true,
  },
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  id_card: {
    type: String,
    trim: true,
    required: true,
  },
  hometown: {
    type: String,
    trim: true,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  telephone_number: {
    type: Number,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  role_id: {
    type: String,
    required: true,
  },
  rental_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("user", user);
