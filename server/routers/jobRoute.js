const express = require("express");
const {getAllJobs, getSingleJob,} = require("../controllers/jobController");

const router = express.Router();

router.get("/", getAllJobs);
router.get("/job/:id", getSingleJob);

module.exports = router;
