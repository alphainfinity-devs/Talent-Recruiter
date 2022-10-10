const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerHandlers/todoHandler");
const userHandler = require("./routerHandlers/userHandler");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
// database connection is here
mongoose
  .connect("mongodb://localhost/todo")
  .then(() => console.log("connection success"))
  .catch((err) => console.log("error", err));
// create a route for todo
app.use("/todo", todoHandler);
app.use("/user", userHandler);
// error handling fn
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  } else {
    res.status(500).json({ error: err });
  }
}
app.use(errorHandler);
app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
