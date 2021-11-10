const nodemailer = require("nodemailer");
const mails = require("./mailsType");

module.exports = (req, res) => {
  const { language, email, fullName, subject, message } = req.body;
  if (!email || !fullName || !message) {
    return res.status(400).json({ sucsess: false });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
      // Auth Config
    },
  });

  const notMailOptions = {
    from: process.env.MAIL,
    to: [process.env.MAIL],
    subject,
    html: mails.conntactNotifcation(fullName, email, message),
  };

  const conMailOptions = {
    from: process.env.MAIL,
    to: [email],
    subject,
    html: mails.conntactUserNotifcation(language, fullName),
  };

  transporter
    .sendMail(notMailOptions)
    .then(() => {
      res.status(200).json({ sucsess: true });
      transporter
        .sendMail(conMailOptions)
        .then(() => {})
        .catch(() => {});
    })
    .catch((err) => {
      res.status(500).json({ sucsess: false });
    });

  transporter.close();
};
