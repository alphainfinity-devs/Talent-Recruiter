const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryname: {
    type: String,
    required: true, 
    trim: true,
    message: "{VALUE} is required",
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["active", "deactive"],
      message: "{VALUE} is not supported",
    },
    default: "active",
  }
},
{
  timestamps: true,
});

module.exports = mongoose.model('Category', categorySchema)