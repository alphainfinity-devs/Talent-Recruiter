const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const checkLogin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = jsonwebtoken.verify(token, `${process.env.JWT_TOKEN}`);
    // console.log(decoded, token, authorization);
      const { userName, userId } = decoded;
    req.userName = userName;
    req.userId = userId;
    next();
  } catch (error) {
    next("authorization failed" +error);
  }
};

module.exports = checkLogin;
