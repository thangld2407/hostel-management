const mongoose = require("mongoose");

const invoice = new mongoose.Schema({
  room_id: {
    type: String,
    required: true,
  },
  water_comsume_per_month: {
    type: Number,
    require: true,
  },
  electric_consume_per_month: {
    type: Number,
    require: true,
  },
  price_of_water_consume: {
    type: Number,
    require: true,
  },
  price_of_electric_consume: {
    type: Number,
    require: true,
  },
  other_services: {
    type: String,
    required: true,
    trim: true,
  },
  total: {
    type: Number,
    require: true,
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
