function sendNodemailer(msg_html, callback) {
  const nodemailer = require("nodemailer"); //require nodemailer module installed
  const express = require("express");

  const app = express.Router();

  /*config of nodemailer in a single object //to import remove the '_example' from configNodemailer_example or
 create a new folder call configNodemailer.js with a object config for nodemailer*/

  const configNodemailer = require("./configNodemailer.js");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport

    /**/ let transporter = nodemailer.createTransport({
      host: configNodemailer.smtp.host,
      port: configNodemailer.smtp.port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: configNodemailer.account.user, // generated ethereal user
        pass: configNodemailer.account.pass // generated ethereal password
      }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: configNodemailer.info.from, // sender address
      to: configNodemailer.info.to, // list of receivers
      subject: configNodemailer.info.subject, // Subject line
      html: msg_html // html body
      //text: "Hello world?", // plain text body// alternative to html message
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);

        return callback("Sorry, your message couldn't be sent");
      } else {
        console.log("Message sent: " + info.response);
        return callback("Your message was sent successfully");
      }
    });
  }

  main();
}

module.exports = sendNodemailer;
