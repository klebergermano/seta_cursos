const connection = require("../../config/connection");

async function alunoCadastrar(req) {
  return new Promise((resolve, reject) => {
    //--------MAX ID--------------
    let maxId = "";
    connection.query("SELECT max(id) as id from aluno", (err, results) => {
      if (err) {
        console.log(err);
      }
      maxId = parseInt(results[0].id) + 1;

      //---------------------Telefone Looping cadastro

      for (let prop_tel in req.body.telefones) {
        let new_telefone = {
          id_aluno: maxId,
          telefone: req.body.telefones[prop_tel].telefone,
          created: req.body.created,
          modified: new Date(),
        };

        connection.query(
          "INSERT INTO aluno_telefone SET ?",

          new_telefone,
          (err) => {
            console.log(err);
          }
        );
      } //---for tel
      //---------------------Celular Looping cadastro

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
          id_aluno: maxId,
          numero: req.body.celulares[prop_cel].numero,
          created: req.body.created,
          app: app.trim(),
          modified: new Date(),
        };
        connection.query(
          "INSERT INTO aluno_celular SET ?",
          new_celular,
          (err) => {
            console.log(err);
          }
        );
      }
    }); //max id----------

    let new_aluno = {
      vinculado_resp: req.body.vinculado_resp,
      nome: req.body.nome,
      responsavel: req.body.responsavel,
      id_resp: req.body.id_resp,
      genero: req.body.genero,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      parentesco: req.body.parentesco,
      email: req.body.email,
      obs: req.body.obs,

      data_nasc: req.body.data_nasc,
      created: req.body.created,
      modified: new Date(),
    };

    connection.query("INSERT INTO aluno SET ?", new_aluno, (err) => {
      if (!err) {
        let vinculo_aluno = req.body.vinculado_resp;
        if (vinculo_aluno === "sim") {
          connection.query(
            "SELECT * FROM aluno ORDER BY ID DESC LIMIT 1",
            (err, results) => {
              if (!err) {
                let id_resp = req.body.id_resp;
                let id_aluno = results[0].id;
                console.log(id_resp);
                connection.query(
                  "UPDATE responsavel SET vinculado_aluno = ?, id_aluno = ? WHERE id = ?",
                  [vinculo_aluno, id_aluno, id_resp],
                  (err) => {
                    if (err) {
                      return console.log(err);
                    }
                  }
                );
              }
            }
          );
        } //if vinculo
      } else {
        console.log(err);
        return reject(err);
      }
    });
    return resolve();
  });
}

module.exports = alunoCadastrar;
