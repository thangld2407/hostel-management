const mongoose = require("mongoose");

const issue = new mongoose.Schema({
  issue_name: {
    type: String,
    required: true,
    trim: true,
  },
  issue_content: {
    type: String,
    required: true,
    trim: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("issue", issue);
