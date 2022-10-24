const express = require("express");
const roleAuthCheck = require("../Middlewares/roleAuthCheck"); //role checking middleware
const {
  addBlog,
  getPosts,
  deletePost,
  updatePost,
  getPost,
} = require("../controllers/blogsController");

const router = express.Router();

router
  .get("/posts", getPosts)
  .get("/post/:id", getPost)
  .post("/add-blog", roleAuthCheck, addBlog)
  .delete("/delete/:id", roleAuthCheck, deletePost)
  .patch("/update/:id", roleAuthCheck, updatePost);
module.exports = router;
