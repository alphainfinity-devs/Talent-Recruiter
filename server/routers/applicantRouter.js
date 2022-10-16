const express = require("express");
const { createJob } = require("../controllers/applicantController");

const router = express.Router();

router.post("/create", createJob);

module.exports = router;
