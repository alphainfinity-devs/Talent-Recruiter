const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryname: {
    type: String,
    required: true, 
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  }
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema)