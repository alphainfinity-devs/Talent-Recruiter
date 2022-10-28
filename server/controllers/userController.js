const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const emails = require("../schemas/emails");

//register a user
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, role, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      //if user already exists
      return res.status(400).json({ message: "User already exists" });
    } else {
      if (name && email && role && password) {
        //sent email table for marketing purpose
        await emails.create({ email });
        //otherwise create a new user
        const hashedPassword = await bcrypt.hash(password, 10); //hashed password
        const user = new User({
          name,
          email,
          role,
          password: hashedPassword,
        });
        const insertResult = await user.save(); //inset in the db
        // exclude field response in mongoose
        const {
          password: userPass,
          _id,
          ...userWithoutPassword
        } = insertResult.toObject();
        console.log(userWithoutPassword);
        return res.status(200).json({
          success: true,
          user: userWithoutPassword,
        });
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//login user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return new Error(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password,
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  console.log(existingUser);
  const token = jwt.sign(
    { id: existingUser._id, email: existingUser.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
    },
  );

  console.log("Generated token\n", token);

  if (req.cookies[`${existingUser._id}`]) {
    req.cookies[`${existingUser.Id}`] = "";
  }

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });
  const { password: loggedInPass, ...userWithoutPassword } =
    existingUser.toObject();
  return res.status(200).json({
    success: true,
    message: "Successfully Logged In",
    user: userWithoutPassword,
    token,
  });
};

//get user
exports.getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return new Error(error);
  }

  if (!user) {
    return res.status(404).json({
      message: "User Not found",
    });
  }

  return res.status(200).json({ user });
};

//refresh token
exports.refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const previusToken = cookies.split("=")[1];

  if (!previusToken) {
    return res.status(400).json({
      message: "couldn't find token",
    });
  }
  jwt.varify(
    String(previusToken),
    process.env.JWT_SECRET_KEY,
    (error, user) => {
      if (error) {
        // console.log(error);
        return res.status(403).json({
          message: "Authentication failed",
        });
      }

      res.clearCookie(`${user.id}`);
      req.cookie[`${user.id}`] = "";

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "35s",
      });
      console.log("Generated token\n", token);

      res.cookie(String(user.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: "lax",
      });

      req.id = user.id;
      next();
    },
  );
};

//logout user
exports.logoutUser = async (req, res, next) => {
  const cookies = req.headers.cookie;
  const previusToken = cookies.split("=")[1];

  if (!previusToken) {
    return res.status(400).json({
      message: "couldn't find token",
    });
  }

  jwt.varify(
    String(previusToken),
    process.env.JWT_SECRET_KEY,
    (error, user) => {
      if (error) {
        // console.log(error);
        return res.status(403).json({
          message: "Authentication failed",
        });
      }

      res.clearCookie(`${user.id}`);
      req.cookie[`${user.id}`] = "";
      return res.status(200).json({
        massage: "successfully Logged out",
      });
    },
  );
};
