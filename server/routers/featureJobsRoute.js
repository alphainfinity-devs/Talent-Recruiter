const express = require("express");
const {
  getFeatureJobs,
  postFeatureJob,
} = require("../controllers/featureJobController");
const recruiterRoleChecker = require("../Middlewares/recruiterRoleChecker");

const router = express.Router();

router.get("/", getFeatureJobs).post("/", recruiterRoleChecker, postFeatureJob);

module.exports = router;
