const express = require("express");
const { addBlog, getPosts } = require("../controllers/blogsController");

const router = express.Router();

router.post("/add-blog", addBlog).get("/posts", getPosts);
module.exports = router;
