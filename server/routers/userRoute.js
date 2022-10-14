const express = require("express");
const {
   registerUser,
  loginUser,
  verifyToken,
  getUser,
  refreshToken,
  logoutUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logoutUser);

module.exports = router;
