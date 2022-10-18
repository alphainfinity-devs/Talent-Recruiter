const mongoose = require("mongoose");

const appliedJobSchema = mongoose.Schema({

    job : {
      type: mongoose.Schema.ObjectId,
      ref: 'Job',
      required: false
    }, 
    candidate : {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false
    }, 
  },
  {
  timestamps: true,
})

module.exports = mongoose.model('AppliedJob',appliedJobSchema)
