const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String || Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Todo",
    },
  ],
});
module.exports = userSchema;
