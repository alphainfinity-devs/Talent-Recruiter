const express = require("express");
const {
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

router
  .get("/", getAllJobs)
  .get("/job/:id", getSingleJob)
  .patch("/update-job/:id", updateJob)
  .delete("/delete-job/:id", deleteJob);

module.exports = router;
