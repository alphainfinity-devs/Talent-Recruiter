const User = require("../Models/userModel");
const emails = require("../schemas/emails");
const emailSender = require("../utilities/emailSender");

const singleEmailSend = async (req, res, next) => {
  try {
    const { email, email_subject, email_body } = req.body || {};
    let result;
    if (email) {
      console.log("single email send");
      result = await emailSender(email, email_subject, email_body);
    } else {
      const users = await User.find({}, { email: 1, _id: 0 });
      const emails = users.map((user) => user.email);
      //   console.log(result)
      for (const email of emails) {
        result = await emailSender(email, email_subject, email_body);
      }
    }
    if (result?.message) {
      res.status(500).json({ error: "email sent timeout" });
    } else {
      res.status(200).json({ result });
    }
  } catch (err) {
    next(err);
  }
};
const emailNewsLetterSent = async (req, res, next) => {
  try {
    const { email, email_subject, email_body } = req.body || {};
    if (email && email_subject && email_body) {
      const result = await emailSender(email, email_subject, email_body);
      if (result?.message) {
        next("email sent timeout");
      } else {
        res.status(200).json({ result });
      }
    } else {
      res
        .status(400)
        .json({ error: "email, email_subject, email_body required" });
    }
  } catch (err) {
    next(err);
  }
};
const emailNewsLetterConfirm = async (req, res, next) => {
  try {
    const { email } = req.body || {};
    const result = await emails.create({ email });
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  emailNewsLetterSent,
  singleEmailSend,
  emailNewsLetterConfirm,
};
