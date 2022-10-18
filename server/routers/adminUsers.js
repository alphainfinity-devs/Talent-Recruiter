const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { getAdminUsers } = require("../controllers/adminUsersController");

const router = express.Router();

router.get("/get-users", expressAsyncHandler(getAdminUsers));
module.exports = router;
