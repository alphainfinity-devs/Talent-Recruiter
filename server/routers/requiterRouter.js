const express = require("express");
const { postJob, getJobByRequiter, deleteJob } = require("../controllers/requiterController");
const verifyToken = require("../Middlewares/verifyToken");

const router = express.Router();

router.get("/get-job-via-requiter", verifyToken, getJobByRequiter);
router.post("/post-job", verifyToken, postJob);
router.delete("/delete-job/:id", verifyToken, deleteJob);

module.exports = router;
