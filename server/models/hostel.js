const mongoose = require("mongoose");

const hostel = new mongoose.Schema({
  hostel_name: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  budgets: {
    type: Number,
    trim: true,
    required: true,
  },
  expenditures: {
    type: Number,
    trim: true,
    required: true,
  },
  area_id: {
    type: String,
    required: true,
  },
  user_id: {
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

module.exports = mongoose.model("hostel", hostel);
