const mongoose = require("mongoose");

const featureJobsSchema = mongoose.Schema(
  {
    payment_through: {
      type: String,
      required: true,
      enum: ["card", "bank", "swap"],
    },
    payment_status: {
      type: Boolean,
      default: true,//it will update false to true by admin but now it is true
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Job",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("FeatureJobs", featureJobsSchema);
