const express = require("express");
const roleAuthCheck = require("../Middlewares/roleAuthCheck"); //role checking middleware
const {
  addBlog,
  getPosts,
  deletePost,
  updatePost,
} = require("../controllers/blogsController");

const router = express.Router();

router
  .post("/add-blog", roleAuthCheck, addBlog)
  .get("/posts", getPosts)
  .delete("/delete/:id", roleAuthCheck, deletePost)
  .put("/update/:id", roleAuthCheck, updatePost);
module.exports = router;
