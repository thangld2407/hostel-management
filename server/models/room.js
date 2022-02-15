const mongoose = require("mongoose");

const room = new mongoose.Schema({
  room_id: {
    type: String,
    trim: true,
  },
  hostel_id: {
    type: String,
    trim: true,
    required: true,
  },
  room_name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  furniture_type: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    required: true,
  },
  update_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("room", room);
