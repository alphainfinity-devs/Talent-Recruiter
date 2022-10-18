const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    let auth = req.headers.authorization;
      if (auth) {
        auth = auth.replace("Bearer ", "");
        
        jwt.verify(auth, process.env.JWT_SECRET_KEY, (err, decoded) => {

          if (err) {
            res.status(401).send({
              success: false,
              errorMessage: "Invalid token",
            });
          } else {
            req.user = decoded;
            next();
          }
        });
      } else {
        res.status(401).send({ error: "Unauthenticated request" });
      }
  }catch (error) {
  next("authorization failed" +error);
}
};

module.exports = verifyToken;
