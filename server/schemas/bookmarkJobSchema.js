const mongoose = require("mongoose");

const bookmarkJobSchema = mongoose.Schema({

    job : {
      type: mongoose.Schema.ObjectId,
      ref: 'Job',
      required: false
    }, 
    user : {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false
    }, 
  },
  {
  timestamps: true,
})

module.exports = mongoose.model('BookmarkJob',bookmarkJobSchema)
