const bcrypt = require("bcrypt");
const User = require("../modals/People");
const path = require("path");
const fs = require("fs");

// get all users
const getUser = async (req, res, next) => {
  try {
    const info = path.join(__dirname + `/../public/uploads/avatars`)
    // console.log("my path",info);
    const users = await User.find();
    res.render("users", {
      users: users,
    });
  } catch (error) {
    next(error);
  }
};
// add a user
async function addUser(req, res, next) {
  let newUser;
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashPassword,
    });
  }
  // save user or throw error
  try {
    await newUser.save();
    res.status(200).json({
      message: "user was added successfully",
    });
  } catch (error) {
    console.log("common error", error);
    res.status(500).json({
      errors: {
        common: {
          msg: "there was a unknown error",
        },
      },
    });
  }
}

// remove user
async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });
    // remove user avatar if any
    if (user.avatar) {
      console.log("got user", user);
      await fs.unlink(
        path.join(__dirname + `/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log("error occurred unlink delete", err);
        }
      );
    }
    res.status(200).json({
      message: "User was removed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
}

module.exports = {
  getUser,
  addUser,
  deleteUser,
};
