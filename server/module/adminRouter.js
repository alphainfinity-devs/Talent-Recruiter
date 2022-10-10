const express = require("express");
const JWTVerify = require("./JWTVerify");
const adminRouter = express.Router();
adminRouter.get("/", (req, res) => {
  res.send("Dashboard");
});

adminRouter.get("/login", JWTVerify, (req, res) => {
  //   res.send("this is login");
  console.log("this is log in");
});

adminRouter.put("/update", (req, res) => {
  res.send("hello update method");
});
// adminRouter.use("*", ());
module.exports = adminRouter;
