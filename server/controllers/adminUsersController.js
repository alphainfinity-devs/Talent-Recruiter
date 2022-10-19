const User = require("../Models/userModel");
const emailSender = require("../utilities/emailSender");
// const emailSender = require("../utilities/emailSender");

// get Users
const getAdminUsers = async (req, res, next) => {
  try {
    // console.log(req.body);
    // console.log(req?.headers);
    const users = await User.find(
      {},
      {
        password: 0,
        __v: 0,
      },
    );
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
    // console.log(user);
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

// warning for user
const warningUser = async (req, res, next) => {
  try {
    const subject = "⚠️ Warning for Violation our Terms and Conditions";
    const body = `
    <h1>Warning</h1>
    <p>Dear User,</p>
    <p>You have been warned for violating our terms and conditions. Please be careful next time.</p>
    <p>Thank you.</p>
    `;
    const { email } = req.body;
    console.log(email);
    if (email) {
      const result = await emailSender(email, subject, body);
      res.status(200).json({ result });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  getAdminUsers,
  updateUserRole,
  deleteUser,
  warningUser,
};
