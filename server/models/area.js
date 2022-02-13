const mongoose = require("mongoose");

const area = new mongoose.Schema({
  area_name: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("area", area);
