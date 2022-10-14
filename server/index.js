const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
// middleware
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static("uploads"));//image upload
app.use(cookieParser());
app.use(cors());
// database connection is here
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "talentRecruiterDBByAlphaInfinity",
  })
  .then(() => console.log("connection success"))
  .catch((err) => console.log("error", err));

app.get("/", (req, res) => {
  res.json({ success: "server is running" });
});

//import all route
const blogsRoute = require("./routers/blogsRoute");
const userRoute = require("./routers/userRoute");
const multer = require("multer");

// create all routes here


app.use("/api/blogs", blogsRoute);

app.use("/api/user", userRoute); //for login and register

app.use("/api/jobs/", require("./routers/jobRoute"));

// app.use("/api/applicant/", require("./routers/applicantRouter"));


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
