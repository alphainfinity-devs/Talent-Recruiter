const nodemailer = require("nodemailer");

const emailSender = async (toEmail, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rasel.mahmud.swpu@gmail.com",
        pass: `${process.env.EMAIL_HOST_PASS}`,
      },
    });

    const mailOptions = {
      from: "rasel.mahmud.swpu@gmail.com",
      to: `${toEmail}`,
      subject: `${subject}`,
      html: `${message}`,
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    // console.log(error);
    return error;
  }
};
module.exports = emailSender;
