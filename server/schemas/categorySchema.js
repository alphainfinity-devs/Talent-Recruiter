const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      message: "{VALUE} is required",
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Category", categorySchema);
