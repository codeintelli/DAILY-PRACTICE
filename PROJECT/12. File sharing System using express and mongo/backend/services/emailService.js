const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  console.log(
    `${process.env.SMTP_HOST} \n   ${process.env.SMTP_PORT}\n${process.env.SMTP_USER}\n${process.env.SMTP_PASS}`
  );
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_SECURE_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // nodemailer method
  let info = await transporter
    .sendMail({
      from: `codeintelli <${from}>`,
      to,
      subject,
      text,
      html,
    })
    .then(() => {
      console.log(info);
    })
    .catch((e) => console.log(e));
  console.log(info);
}

module.exports = sendMail;
