const express = require("express");
const { postJob, getJobByRecruiter, deleteJob, getApplicantByJob } = require("../controllers/recruiterController");
const verifyToken = require("../Middlewares/verifyToken");

const router = express.Router();

router.get("/get-job-via-recruiter", verifyToken, getJobByRecruiter);
router.get("/get-applicant-via-job/:id", verifyToken, getApplicantByJob);
router.post("/post-job", verifyToken, postJob);
router.delete("/delete-job/:id", verifyToken, deleteJob);

module.exports = router;
