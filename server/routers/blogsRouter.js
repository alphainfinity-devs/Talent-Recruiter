const express = require("express");
const { addBlog } = require("../controllers/blogsController");

const router = express.Router();

// process login
router.post(
  "/add-blog",
  addBlog
);
// router.delete("/", logout);
module.exports = router;
