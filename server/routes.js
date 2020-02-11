const express = require("express");
const connection = require("./config/connection");
const sendNodemailer = require("./nodemailer/sendNodemailer");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express.Router();

//Create User
app.post("/form_create_user", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let privilege = req.body.privilege;
  var created = new Date();

  bcrypt.hash(password, saltRounds, function(err, hash) {
    let new_user = {
      name: username,
      password: hash,
      privilege: privilege,
      created: created,
      modified: created
    };
    connection.query("INSERT INTO user SET?", new_user, (err, res) => {
      if (err) throw err;
    });
  });
});

app.post("/form_login", async (req, res, next) => {
  connection.query(
    `SELECT name, password FROM user WHERE name = '${req.body.username}'`,
    (err, results) => {
      if (err) {
        return reject(err);
      } else {
        let hashpassword = results[0].password; //hashed password for comparison
        let password = req.body.password; //plain password from form login

        var match = bcrypt.compare(password, hashpassword, function(
          err,
          result
        ) {
          if (result) {
            console.log(result);
            res.send(200, { result: true });
          } else {
            res.send(false);
          }
        });
      }
    }
  );
});

//Login Form

//receive the form POST and call nodemailer to send
app.post("/form_send", async (req, res, next) => {
  //Create the html body to send by email
  const msg_html = `
  <p>You have a new contact request</p>
  <h3>Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  <li>Subject: ${req.body.subject}</li>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  
  </ul>
  `;

  //send the message by email using nodemailer
  // this function has a callback that send response message to client
  // its callback message can be configured in sendNodemailer.js
  sendNodemailer(msg_html, msg => {
    res.send(msg);
  });
});

//Exports the routes collection to server.js
module.exports = app;
