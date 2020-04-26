const connection = require("../../config/connection");

async function alunoUpdate(req) {
  return new Promise((resolve, reject) => {
    let tel = {};
    let cel = {};
    let id2 = req.body.id;
    let update_aluno = {
      nome: req.body.nome,
      vinculado_resp: req.body.vinculado_resp,
      responsavel: req.body.responsavel,
      parentesco: req.body.parentesco,
      id_resp: req.body.id_resp,
      genero: req.body.genero,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      email: req.body.email,
      obs: req.body.obs,
      data_nasc: req.body.data_nasc,
      created: req.body.created,
      modified: new Date(),
    };

    let sql = "UPDATE aluno SET ? WHERE id = ?";
    connection.query(sql, [update_aluno, id2], (err) => {
      if (!err) {
        let vinculo_aluno = req.body.vinculado_resp;
        let id_resp = parseInt(req.body.id_resp);
        let id_aluno = req.body.id;

        //desvincula o antigo responsavel como aluno canso haja antigo_id_resp
        if (typeof req.body.antigo_id_resp !== "undefined") {
          let antigo_id_resp = parseInt(req.body.antigo_id_resp);
          connection.query(
            "UPDATE responsavel SET vinculado_aluno = ' ', id_aluno = ' ' WHERE id = ?",
            [antigo_id_resp],
            (err) => {
              if (err) {
                return console.log(err);
              }
            }
          );
        } //if

        if (vinculo_aluno === "sim") {
          connection.query(
            "UPDATE responsavel SET vinculado_aluno = ?, id_aluno = ? WHERE id = ?",
            [vinculo_aluno, id_aluno, id_resp],
            (err) => {
              if (err) {
                return console.log(err);
              }
            }
          );
        } //if vinculo
      } //update aluno

      //------Telefone Looping EDIT SAVE-------------
      let telefones = req.body.telefones;
      let i = 0;
      for (props in telefones) {
        let id_tel = telefones[i].id;

        if (
          (typeof telefones[i].id_aluno === "undefined" ||
            typeof telefones[i].id_aluno === "NULL") &&
          telefones[i].telefone !== "delete"
        ) {
          let new_telefone = {
            id_aluno: id2,
            telefone: req.body.telefones[i].telefone,
            created: req.body.telefones[i].created,
            modified: new Date(),
          };

          connection.query(
            "INSERT INTO aluno_telefone SET ?",
            new_telefone,
            (err) => {
              if (!err) {
              } else {
                console.log(err);
              }
            }
          );
        } else if (telefones[i].telefone === "delete") {
          let sql = "DELETE FROM aluno_telefone WHERE id= ?;";
          connection.query(sql, [id_tel], (err) => {
            if (err) {
              return reject(err);
            }
          });
        } else {
          let update_telefone = {
            telefone: telefones[i].telefone,
            created: telefones[i].created,
            modified: new Date(),
          };

          let sql = "UPDATE aluno_telefone SET ? WHERE id_aluno = ? AND id = ?";
          connection.query(sql, [update_telefone, id2, id_tel], (err) => {
            if (err) {
              return reject(err);
            }
          });
        } //else

        i++;
      } //for Tel Edit Save

      //-------------Celulares Looping EDIT SAVE-----------------------------

      let celulares = req.body.celulares;

      let i_cel = 0;
      for (props in celulares) {
        let id_cel = celulares[i_cel].id;

        let whatsapp = "";
        let messenger = "";
        if (typeof celulares[i_cel].whatsapp != "undefined") {
          whatsapp = celulares[i_cel].whatsapp;
        }
        if (typeof celulares[i_cel].messenger != "undefined") {
          messenger = celulares[i_cel].messenger;
        }
        let app = whatsapp + " " + messenger;

        if (
          (typeof celulares[i_cel].id_aluno === "undefined" ||
            typeof celulares[i_cel].id_aluno === "NULL") &&
          celulares[i_cel].numero !== "delete"
        ) {
          let new_celular = {
            id_aluno: id2,
            ddd: celulares[i_cel].ddd,
            numero: celulares[i_cel].numero,
            app: app.trim(),
            created: celulares[i_cel].created,
            modified: new Date(),
          };

          connection.query(
            "INSERT INTO aluno_celular SET ?",
            new_celular,
            (err) => {
              if (!err) {
              } else {
                console.log(err);
              }
            }
          );
        } else if (celulares[i_cel].numero === "delete") {
          let sql = "DELETE FROM aluno_celular WHERE id= ?;";
          connection.query(sql, [id_cel], (err) => {
            if (err) {
              return reject(err);
            }
          });
        } else {
          let update_celular = {
            ddd: celulares[i_cel].ddd,
            numero: celulares[i_cel].numero,
            app: app.trim(),

            created: celulares[i_cel].created,
            modified: new Date(),
          };

          let sql = "UPDATE aluno_celular SET ? WHERE id_aluno = ? AND id = ?";
          connection.query(sql, [update_celular, id2, id_cel], (err) => {
            if (err) {
              return reject(err);
            }
          });
        } //else

        i_cel++;
      } //for Tel Edit Save

      return resolve(resolve);
    });
  });
}

module.exports = alunoUpdate;
