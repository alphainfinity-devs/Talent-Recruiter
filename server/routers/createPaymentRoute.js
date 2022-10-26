const express = require("express");
const { createPayment } = require("../controllers/createPaymentController");
const recruiterRoleChecker = require("../Middlewares/recruiterRoleChecker");
const roleAuthCheck = require("../Middlewares/roleAuthCheck");

const router = express.Router();
router.get(
  "/",
  roleAuthCheck,
  /*  recruiterRoleChecker
, */ createPayment,
);
module.exports = router;
