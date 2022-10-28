const mongoose = require("mongoose");
const emails = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Unique Email"],
    unique: true,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Emails", emails);
