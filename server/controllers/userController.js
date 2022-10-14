const User = require("../schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register a user
exports.registrUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json({
    success: true,
    user,
  });
};

//login user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
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
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "invalid email or password" });
  }
  console.log(existingUser);
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "35s",
  });

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

  return res.status(200).json({
    success: true,
    message: "Successfully Logged In",
    user: existingUser,
    token,
  });
};

//varify token
exports.verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  // console.log(token);

  if (!token) {
    res.status(404).json({
      message: "token not found",
    });
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.id = user.id;
  });
  next();
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
    }
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
    }
  );
};
