const express = require("express");
const connection = require("./config/connection");
const sendNodemailer = require("./nodemailer/sendNodemailer");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const bcrypt = require("bcrypt");
const db = require("./db");

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

app.post("/check_cookie", async (req, res, next) => {
  res.send(200, { result: true });
});

//-------------------------------CADASTRAR ALUNO---------------------

app.post("/cadastrar_aluno", (req, res) => {
  let new_aluno = {
    nome: req.body.nome,
    genero: req.body.genero,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    email: req.body.email,

    data_nasc: req.body.data_nasc,
    created: req.body.created,
    modified: new Date()
  };

  connection.query("INSERT INTO aluno SET?", new_aluno, err => {
    if (!err) {
      0;
      res.send({ msg_send: "Cadastrado com Sucesso!" });
    } else {
      console.log(err);
    }
  });
});

//----------------------------RESPONSAVEL VIEW----------------------------------------------
app.get("/api/clients", async (req, res) => {
  try {
    let results = await db.responsavelTable.all();

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-------------------------------CADASTRAR RESPONSAVEL---------------------

app.post("/cadastrar_responsavel", (req, res) => {
  let new_responsavel = {
    nome: req.body.nome,
    genero: req.body.genero,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    email: req.body.email,
    rg: req.body.rg,
    cpf: req.body.cpf,
    data_nasc: req.body.data_nasc,
    created: req.body.created,
    modified: new Date()
  };

  connection.query("INSERT INTO responsavel SET?", new_responsavel, err => {
    if (!err) {
      //-----------------Cadastra Telefones e Celulares
      connection.query(
        "SELECT max(id) as id from responsavel",
        (err, results) => {
          let maxId = results[0].id;

          //---------------------Telefone Looping cadastro
          for (let prop_tel in req.body.telefones) {
            let new_telefone = {
              id_resp: maxId,
              telefone: req.body.telefones[prop_tel],
              created: req.body.created,
              modified: new Date()
            };

            connection.query(
              "INSERT INTO resp_telefone SET?",
              new_telefone,
              err => {}
            );
          }

          for (let prop_cel in req.body.celulares) {
            let whatsapp = "";
            let messenger = "";
            if (typeof req.body.celulares[prop_cel].whatsapp != "undefined") {
              whatsapp = req.body.celulares[prop_cel].whatsapp;
            }
            if (typeof req.body.celulares[prop_cel].messenger != "undefined") {
              messenger = req.body.celulares[prop_cel].messenger;
            }
            let app = whatsapp + " " + messenger;
            let new_celular = {
              ddd: req.body.celulares[prop_cel].ddd,
              id_resp: maxId,
              celular: req.body.celulares[prop_cel].numero,
              created: req.body.created,
              app: app.trim(),
              modified: new Date()
            };
            connection.query(
              "INSERT INTO resp_celular SET?",
              new_celular,
              err => {}
            );
            console.log(prop_cel);
          }
        }
      );

      /*---------------------------- */

      res.send({ msg_send: "Cadastrado com Sucesso!" });
    } else {
      console.log(err);
    }
  });
});

//----------------------------------------------------------------
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

              res.send(200, {
                result: true,
                session_id: req.sessionID,
                name: userInfo.name,
                privilege: userInfo.privilege
              });

              console.log(req.sessionID);
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
