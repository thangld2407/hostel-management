const mongoose = require("mongoose");

const account = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
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

module.exports = mongoose.model("account", account);
