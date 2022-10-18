const express = require("express");
const {
   registerUser,
  loginUser,
  getUser,
  refreshToken,
  logoutUser,
} = require("../controllers/userController");
const verifyToken = require("../Middlewares/verifyToken");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logoutUser);

module.exports = router;
