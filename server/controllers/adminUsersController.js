const User = require("../Models/userModel");
const emailSender = require("../utilities/emailSender");
// const emailSender = require("../utilities/emailSender");

// get Users
const getAdminUsers = async (req, res, next) => {
  try {
    const { email, role, page, limit } = req.query;
    // console.log(page, limit);
    const users = await User.find(email ? { email } : role ? { role } : {}, {
      password: 0,
      __v: 0,
    })
      .skip(`${email || role ? 0 : (page - 1) * limit}`)
      .limit(`${email || role ? 0 : limit}`)
      .exec();
    const count = await User.count();
    res.status(200).json({
      users,
      totalPages: Math.ceil(`${email || role ? 1 : count / limit}`),
      currentPage: `${email || role ? 1 : page}`,
    });
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
      if (result?.message) {
        res.status(500).json({ error: "email sent timeout" });
      }
      res.status(200).json({ result });
    }
  } catch (error) {
    // console.log(error);
    next(error);
  }
};
module.exports = {
  getAdminUsers,
  updateUserRole,
  deleteUser,
  warningUser,
};
