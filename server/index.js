const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
// database connection is here
mongoose
  .connect(`mongodb://localhost:27017/talent-recruiter`)
  .then(() => console.log("connection success"))
  .catch((err) => console.log("error", err));

app.get("/", (req, res) => {
  res.send("{ filters }");
});

//import all route
const userRouter = require("./routers/userRoute");

// create all routes here
app.use("/api/auth/", userRouter);
app.use("/api/jobs/", require("./routers/jobRoute"));
app.use("/api/applicant/", require("./routers/applicantRouter"));

// All default error handling function
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
