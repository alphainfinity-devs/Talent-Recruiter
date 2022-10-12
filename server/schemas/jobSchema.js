const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: Boolean,
    default: false,
  },
  level: {
    type: String,
    required: true,
    enum: ["Entry Level", "Mid Level", "Senior Level"],
  },
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // category: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Category',
  //   required: false
  // },
  // company_name: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: 'User',
  //     required: false
  // },  
});

module.exports = mongoose.model('Job',jobSchema)
