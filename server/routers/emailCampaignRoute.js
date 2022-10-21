const express = require("express");
const singleEmailSend = require("../controllers/emailCampaignController");

const router = express.Router();

router.post("/email", singleEmailSend);

module.exports = router;
