const express = require("express");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const checkLogin = require("../Middlewares/checkLogin");
const router = express.Router();
const User = new mongoose.model("User", userSchema);

router.post("/signup", async (req, res) => {
  const { name, userName, status } = req.body;
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    console.log("hey pass", password);
    const newUser = new User({
      name,
      userName,
      password,
      status,
    });
    const result = await newUser.save();
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});
// login method
router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ userName: req.body.userName });
    if (user.length > 0 && user) {
      const isPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isPassword) {
        // generate token
        const token = jsonwebtoken.sign(
          { userName: user[0].userName, userId: user[0]._id },
          `${process.env.JWT_TOKEN}`,
          {
            expiresIn: "7d",
          }
        );
        res.send({
          access_token: token,
          message: "log in success",
        });
      } else {
        res.send({
          message: "Authentication failed",
        });
      }
    } else {
      res.send({
        message: "Authentication failed",
      });
    }
  } catch (err) {
    console.log("error occurred", err);
  }
});
router.get("/users", checkLogin, async (req, res) => {
  try {
    const users = await User.find({ _id: req.userId }).populate("todos");
    res.send(users);
  } catch (error) {
    console.log("there was error", error);
  }
});
module.exports = router;
