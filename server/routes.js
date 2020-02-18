const express = require("express");
const connection = require("./config/connection");
const sendNodemailer = require("./nodemailer/sendNodemailer");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const bcrypt = require("bcrypt");

var sessionStore = new MySQLStore({} /* session store options */, connection);

const saltRounds = 10;

const app = express.Router();

const TWO_HOURS = 1000 * 60 * 60 * 2; // 2 HOURS
const IN_PRODUCTION = false; // Developing stage if is False or true for Production state
const SESS_NAME = "sid";
const SESS_SECRET = "setaLogSpK";

app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    store: sessionStore,
    cookie: {
      httpOnly: false,
      maxAge: TWO_HOURS,
      sameSite: true, // strict
      secure: false // Developing stage if is False or true for Production state
    }
  })
);

app.post("/check_session", async (req, res, next) => {
  console.log("check_session: " + req.body.sid);
  res.send(200, { result: true });
});

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
      if (err) {
      }
    });
  });
});
//Login Form

app.post("/form_login", async (req, res, next) => {
  connection.query(
    `SELECT id, name, privilege,  password FROM user WHERE name = '${req.body.username}'`,
    (err, results) => {
      if (err) {
      } else {
        if (typeof results[0] !== "undefined") {
          let hashpassword = results[0].password; //hashed password for comparison
          let password = req.body.password; //plain password from form login

          bcrypt.compare(password, hashpassword, function(err, result) {
            if (result) {
              let userInfo = {
                id: results[0].id, //hashed password for comparison
                name: results[0].name, //hashed password for comparison
                privilege: results[0].privilege //hashed password for comparison
              };

              var sess = req.session;
              sess.Id = userInfo.id;
              sess.name = userInfo.name;
              sess.privilege = userInfo.privilege;

              res.send(200, { result: true, session_id: req.sessionID });
            } else {
              res.send(false); //TODO:
            }
          });
        } else {
          console.log("User not found");
        }
      }
    }
  );
});
// Logout
app.post("/logout", (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      throw err;
    } else {
      res.clearCookie(SESS_NAME);
    }
  });
});

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
