const { mongoose } = require("mongoose");
const blogPostSchema = require("../schemas/blogPostSchema");
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;
