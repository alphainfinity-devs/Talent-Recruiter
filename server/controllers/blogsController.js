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
    // console.log(chunkLimit, limit);
    const posts = await BlogPost.find(
      {},
      {
        __v: 0,
      },
    )
      .limit(limit ? limit : 0)
      .exec();
    // console.log(posts,"all posts");
    const count = await BlogPost.count();
    res.status(200).json({
      posts,
      totalPost: count,
      totalPages: chunkLimit ? Math.ceil(count / chunkLimit) : 1,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// get a single post
const getPost = async (req, res, next) => {
  try {
    console.log(req.params);
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
    let updateValue = {};
    for (const value in req.body) {
      if (req.body[value]) {
        updateValue[value] = req.body[value];
      }
    }
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { $set: updateValue },
      {
        new: true,
        runValidators: true,
      },
    );
    console.log(post);
    if (post) {
      res.status(200).json(post);
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
