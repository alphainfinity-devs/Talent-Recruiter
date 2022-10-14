const mongoose = require("mongoose");
const moment = require("moment");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [3, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [6, "Password should be greater than 6 characters"],
  },
  role: {
    type: String,
    enum: {
      values: ["applicant", "recruiter", "admin"],
      message: "{VALUE} is not supported",
    },
    default: "applicant",
  },
  createdAt: {
    type: String,
    default: moment().format("MMM Do YYYY"),
  },
});

module.exports = userSchema;
