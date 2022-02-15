const mongoose = require("mongoose");

const account = new mongoose.Schema(
  {
    user_id: {
      ref: "user",
      type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("account", account);
