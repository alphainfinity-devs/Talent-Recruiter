const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
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
    type: {
      type: String,
      required: true,
      enum: ["Full Time", "Part Time", "Contactual"],
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
    vacancy: {
      type: Number,
      required: true,
    },
    dead_line: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_link: {
      type: String,
      required: true,
    },
    requiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Job", jobSchema);
