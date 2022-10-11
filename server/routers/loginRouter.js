const express = require("express");
const { getLogin, login, logout } = require("../controllers/loginController");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

const router = express.Router();
const page_title = "Login page";

router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);
// process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);
router.delete("/", logout);
module.exports = router;
