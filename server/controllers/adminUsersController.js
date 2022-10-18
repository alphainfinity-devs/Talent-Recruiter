const User = require("../Models/userModel");
// get Users
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
// update user role
const updateUserRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { role },
      {
        new: true,
        runValidators: true,
        select: {
          password: 0,
          __v: 0,
        },
      },
    );
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
// delete user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAdminUsers,
  updateUserRole,
  deleteUser,
};
