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
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: false
},
  company_name: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false
  },
});
export default mongoose.models.Job || mongoose.model('Job', jobSchema)
