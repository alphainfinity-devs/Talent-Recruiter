const User = require("../Models/userModel");
// get Posts
const getAdminUsers = async (req, res, next) => {
  try {
    // console.log(req.body);
    console.log(req?.headers);
    const users = await User.find(
      {},
      {
        password: 0,
        __v: 0,
      },
    );
    console.log(users);
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  getAdminUsers,
};
