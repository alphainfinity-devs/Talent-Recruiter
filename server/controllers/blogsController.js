const BlogPost = require("../Models/blogPostModel");

// add a blog post
const addBlog = async (req, res, next) => {
  try {
    const {
      post_title,
      post_description,
      post_author,
      post_image,
      post_category,
    } = req.body;
    const blogPost = new BlogPost({
      post_title,
      post_description,
      post_image,
      post_author,
      post_category,
    });
    await blogPost.save(); //insert in the db all info
    res.status(200).json({ success: "blog was added successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// get all Posts
const getPosts = async (req, res, next) => {
  try {
    const { chunkLimit, limit } = req.query;
    console.log(chunkLimit, limit);
    const posts = await BlogPost.find(
      {},
      {
        __v: 0,
      },
    )
      .limit(limit)
      // .skip((page - 1) * limit)
      .exec();
    const count = await BlogPost.count();
    res.status(200).json({
      posts,
      totalPost: count,
      totalPages: Math.ceil(count / chunkLimit),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// get a single post
const getPost = async (req, res, next) => {
  try {
    console.log(req.params)
    const post = await BlogPost.findById(req.params.id);
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// update a post
const updatePost = async (req, res, next) => {
  try {
    const {
      post_title,
      post_description,
      post_author,
      post_image,
      post_category,
    } = req.body;
    const post = await BlogPost.findById(req.params.id);
    if (post) {
      post.post_title = post_title;
      post.post_description = post_description;
      post.post_author = post_author;
      post.post_image = post_image;
      post.post_category = post_category;
      const updatedPost = await post.save();
      res.status(200).json({ updatedPost });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// delete a post
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BlogPost.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addBlog,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
