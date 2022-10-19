const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const {
  getAdminUsers,
  updateUserRole,
  deleteUser,
  warningUser,
} = require("../controllers/adminUsersController");

const router = express.Router();

router
  .get("/get-users", expressAsyncHandler(getAdminUsers))
  .patch("/update-user-role/:id", expressAsyncHandler(updateUserRole))
  .post("/warning-user", expressAsyncHandler(warningUser))
  .delete("/delete-user/:id", expressAsyncHandler(deleteUser));
module.exports = router;
