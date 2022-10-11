const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
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
  jobs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
  ],
});

export default mongoose.models.User || mongoose.model('User', userSchema)