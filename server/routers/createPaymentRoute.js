const express = require("express");
const { createPayment } = require("../controllers/createPaymentController");
const verifyToken = require("../Middlewares/verifyToken");
const roleAuthCheck = require("../Middlewares/roleAuthCheck");

const router = express.Router();
router.get("/",roleAuthCheck,/*  verifyToken, */ createPayment);
module.exports = router;
