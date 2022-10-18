// get Posts
const getAdminUsers = async (req, res, next) => {
  try {
    // console.log(req.body);
    console.log(req?.headers);
    //   const posts = await BlogPost.find();
    res.status(200).json({ p: "posts" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  getAdminUsers,
};
