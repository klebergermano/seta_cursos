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
      secure: false, // Developing stage if is False or true for Production state
    },
  })
);

app.post("/check_cookie", async (req, res, next) => {
  res.send(200, { result: true });
});

//=================================== MAIN DASHBOARD TABLE ====================================

app.get("/profile/cadastros_info", async (req, res) => {
  console.log("testsets");
  try {
    let results = {};
    responsaveis = await db.responsavelTable.view();
    alunos = await db.alunoTable.view();
    contratos = await db.contratoTable.view();
    carnes = await db.carneTable.view();
    cursos = await db.cursoTable.view();

    let num_resp = parseInt(responsaveis.length);
    let num_alunos = parseInt(alunos.length);
    let num_contratos = parseInt(contratos.length);
    let num_carnes = parseInt(carnes.length);
    let num_cursos = parseInt(cursos.length);
    console.log(num_carnes);

    let last_carnes;
    let last_contratos;
    let last_alunos;
    let last_resp;
    if (num_carnes == 0) {
      last_carnes = 0;
    } else {
      last_carnes = carnes[num_carnes - 1];
    }
    if (num_contratos == 0) {
      last_contratos = 0;
    } else {
      last_contratos = contratos[num_contratos - 1];
    }
    if (num_alunos == 0) {
      last_alunos = 0;
    } else {
      last_alunos = alunos[num_alunos - 1];
    }
    if (num_resp == 0) {
      last_resp = 0;
    } else {
      last_resp = responsaveis[num_resp - 1];
    }
    if (num_cursos == 0) {
      last_cursos = 0;
    } else {
      last_cursos = cursos[num_cursos - 1];
    }

    results.last_resp = last_resp;
    results.last_alunos = last_alunos;
    results.last_contratos = last_contratos;
    results.last_carnes = last_carnes;
    results.last_cursos = last_cursos;

    results.num_resp = num_resp;
    results.num_alunos = num_alunos;
    results.num_contratos = num_contratos;
    results.num_carnes = num_carnes;
    results.num_cursos = num_cursos;

    res.json(results);
  } catch (e) {
    console.log(e);
  }

  //
});

//=================================== RESUMO ====================================

//-- RESUMO--------------------------------

app.get("/profile/resumo/:id", async (req, res) => {
  let id_resp = req.params.id;
  try {
    let results = {};
    alunos = await db.alunoTable.view();
    contratos = await db.contratoTable.view();
    carnes = await db.carneTable.view();

    res_alunos = {};
    res_contratos = {};
    res_carnes = {};

    let j = 0;
    let j_contrato = 0;
    let j_carne = 0;
    //check alunos -----
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].id_resp == id_resp) {
        res_alunos[j] = alunos[i];
        j++;
      }
    }
    //check contratos ----
    for (let i = 0; i < contratos.length; i++) {
      if (contratos[i].id_resp == id_resp) {
        res_contratos[j_contrato] = contratos[i];
        j_contrato++;
      }
    }
    //
    //check carnes ----
    for (let i = 0; i < carnes.length; i++) {
      if (carnes[i].id_resp == id_resp) {
        res_carnes[j_carne] = carnes[i];
        j_carne++;
      }
    }
    //
    results.alunos = res_alunos;
    results.contratos = res_contratos;
    results.carnes = res_carnes;
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//=================================== CARNÊ TABLE ====================================

//-- UPDATE EDIT CARNÊ--------------------------------

app.post("/profile/carne_update", async (req, res) => {
  try {
    let results = await db.carneTable.update(req);

    if (results) {
      res.send({ msg_send: "Carnê atualizado com Sucesso!" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//----EDIT VIEW CARNÊ ----------------------

app.get("/profile/carne_edit/:id", async (req, res) => {
  var id = req.params.id;

  try {
    let results = {};
    results.carne = await db.carneTable.editView(id);
    results.folhas = await db.carneTable.folhaEditView(id);

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-INSERT CARNÊS  ----------------------------------

app.post("/profile/cadastrar_carne", async (req, res) => {
  try {
    let results = await db.carneTable.add(req);
    if (results) {
      res.send({ msg_send: "Carnê Cadastrado com Sucesso!" });
    } else {
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//-----CARNÊ FOLHAS LAST ID VIEW-------------------------------------
app.get("/profile/last_id_folhas", async (req, res) => {
  try {
    let results = await db.carneTable.folhaView();
    let num = results.length - 1;
    if (typeof results[num] !== "undefined") {
      res.json(results[num].id);
    } else {
      res.json(1);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//-----CARNÊ FOLHAS VIEW-------------------------------------
app.get("/profile/carne_folhas", async (req, res) => {
  try {
    let results = await db.carneTable.folhaView();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//-----CARNÊ VIEW-------------------------------------
app.get("/profile/carnes", async (req, res) => {
  try {
    let results = await db.carneTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//=================================== CONTRATO TABLE ====================================

//-- UPDATE EDIT CONTRATO--------------------------------

app.post("/profile/contrato_update", async (req, res) => {
  try {
    let results = await db.contratoTable.update(req);

    if (results) {
      res.send({ msg_send: "Contrato atualizado com Sucesso!" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//----EDIT VIEW CONTRATO ----------------------

app.get("/profile/contrato_edit/:id", async (req, res) => {
  var id = req.params.id;

  try {
    let results = await db.contratoTable.editView(id);

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-INSERT CONTRATO  ----------------------------------

app.post("/profile/cadastrar_contrato", async (req, res) => {
  try {
    let results = await db.contratoTable.add(req);
    if (results) {
      res.send({ msg_send: "Curso cadastrado com Sucesso!" });
    } else {
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-----CONTRATO Aluno -------------------------------------
app.get("/profile/aluno_contrato", async (req, res) => {
  try {
    console.log("ok");
    let results = await db.alunoTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//-----CONTRATO CURSO -------------------------------------
app.get("/profile/curso_contrato", async (req, res) => {
  try {
    let results = await db.cursoTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//-----CONTRATO RESP -------------------------------------
app.get("/profile/resp_contrato", async (req, res) => {
  try {
    console.log("ok");
    let results = await db.responsavelTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-----CONTRATO VIEW-------------------------------------
app.get("/profile/contratos", async (req, res) => {
  try {
    let results = await db.contratoTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-------------------------------------------------------------------------------------
//=================================== CURSO TABLE =======================================

//-- UPDATE EDIT CURSO--------------------------------

app.post("/profile/curso_update", async (req, res) => {
  try {
    let results = await db.cursoTable.update(req);

    if (results) {
      res.send({ msg_send: "Curso atualizado com Sucesso!" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//----EDIT VIEW CURSO ----------------------

app.get("/profile/curso_edit/:id", async (req, res) => {
  var id = req.params.id;

  try {
    let results = await db.cursoTable.edit(id);

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-INSERT CURSO  ----------------------------------

app.post("/profile/cadastrar_curso", async (req, res) => {
  console.log("ok");
  try {
    let results = await db.cursoTable.insert(req);
    if (results) {
      res.send({ msg_send: "Curso cadastrado com Sucesso!" });
    } else {
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-----CURSO VIEW-------------------------------------
app.get("/profile/cursos", async (req, res) => {
  try {
    let results = await db.cursoTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//----------------------------------------------------------------------------------------- */

//======================================= ALUNO TABLE =======================================

//--UPDATE EDIT ALUNO  ----------------------------------

app.post("/profile/aluno_update", async (req, res) => {
  try {
    let results = await db.alunoTable.put(req);

    if (results) {
      res.send({ msg_send: "Aluno atualizado com Sucesso!" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//--EDIT VIEW ALUNO  ------------------------------------

app.get("/profile/aluno_edit/:id", async (req, res) => {
  var id = req.params.id;

  try {
    let results = await db.alunoTable.edit(id);

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//---ALUNO VIEW------------------------------------------
app.get("/profile/alunos", async (req, res) => {
  try {
    let results = await db.alunoTable.view();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//--CADASTRAR ALUNO-----------------------------------------

app.post("/profile/cadastrar_aluno", async (req, res) => {
  try {
    let results = await db.alunoTable.cadastrar(req);

    res.send({ msg_send: "Atualizado com Sucesso!" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//================================= RESPONSAVEL TABLE =======================================

//---RESP_ALUNO----------------------------------------------
app.get("/api/resp_aluno", async (req, res) => {
  try {
    let results = await db.responsavelTable.view();

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//------UPDATE EDIT RESPONSÁVEL  --------------------------------
app.post("/profile/responsavel_update", async (req, res) => {
  try {
    let results = await db.responsavelTable.put(req);
    if (results) {
      res.send({ msg_send: "Atualizado com Sucesso!" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//-----EDIT VIEW RESPONSÁVEL  ---------------------------------

app.get("/profile/responsavel_edit/:id", async (req, res) => {
  var id = req.params.id;

  try {
    let results = await db.responsavelTable.edit(id);

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//----RESPONSAVEL VIEW--------------------------------------
app.get("/profile/responsaveis", async (req, res) => {
  try {
    let results = await db.responsavelTable.view();

    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//--CADASTRAR RESPONSAVEL-----------------------------

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
    obs: req.body.obs,
    modified: new Date(),
  };

  connection.query("INSERT INTO responsavel SET?", new_responsavel, (err) => {
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
              telefone: req.body.telefones[prop_tel].telefone,
              created: req.body.created,
              modified: new Date(),
            };

            connection.query(
              "INSERT INTO resp_telefone SET ?",
              new_telefone,
              (err) => {}
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
            console.log("*PROP CEL------------------" + prop_cel);
            let app = whatsapp + " " + messenger;
            let new_celular = {
              ddd: req.body.celulares[prop_cel].ddd,
              id_resp: maxId,
              numero: req.body.celulares[prop_cel].numero,
              created: req.body.created,
              app: app.trim(),
              modified: new Date(),
            };
            connection.query(
              "INSERT INTO resp_celular SET ?",
              new_celular,
              (err) => {}
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

//---------------------------------------------------------------------------------------------------

//================================= USER TABLE =======================================================

//Create User
app.post("/form_create_user", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let privilege = req.body.privilege;
  var created = new Date();

  bcrypt.hash(password, saltRounds, function (err, hash) {
    let new_user = {
      name: username,
      password: hash,
      privilege: privilege,
      created: created,
      modified: created,
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

          bcrypt.compare(password, hashpassword, function (err, result) {
            if (result) {
              let userInfo = {
                id: results[0].id, //hashed password for comparison
                name: results[0].name, //hashed password for comparison
                privilege: results[0].privilege, //hashed password for comparison
              };

              var sess = req.session;
              sess.Id = userInfo.id;
              sess.name = userInfo.name;
              sess.privilege = userInfo.privilege;

              res.send(200, {
                result: true,
                session_id: req.sessionID,
                name: userInfo.name,
                privilege: userInfo.privilege,
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
  req.session.destroy((err) => {
    if (err) {
      throw err;
    } else {
      res.clearCookie(SESS_NAME);
    }
  });
});

//================================= FORM SEND =======================================

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
  sendNodemailer(msg_html, (msg) => {
    res.send(msg);
  });
});

//Exports the routes collection to server.js
module.exports = app;
