const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  console.log(
    `${process.env.SMTP_HOST} \n   ${process.env.SMTP_PORT}\n${process.env.SMTP_MAIL}\n${process.env.SMTP_PASS}`
  );
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  // nodemailer method
  try {
    let mailInfo = {
      from: `codeintelli <${from}>`,
      to,
      subject,
      text,
      html,
    };
    return await transporter.sendMail(mailInfo);
  } catch (err) {
    return res.status(500).json({ err });
  }
}

module.exports = sendMail;
