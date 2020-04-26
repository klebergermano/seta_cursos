const connection = require("../../config/connection");
const alunoUpdate = require("../aluno/alunoUpdate");

let responsavelTable = {};

//------------------------------------------UPDATE RESPONSAVEL-----------------------
responsavelTable.put = async (req) => {
  return new Promise((resolve, reject) => {
    let tel = {};
    let cel = {};
    let id_resp = req.body.id;

    let update_responsavel = {
      nome: req.body.nome,
      genero: req.body.genero,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      email: req.body.email,
      rg: req.body.rg,
      cpf: req.body.cpf,
      obs: req.body.obs,
      data_nasc: req.body.data_nasc,
      created: req.body.created,
      modified: new Date(),
    };

    let sql = "UPDATE responsavel SET ? WHERE id = ?";

    connection.query(sql, [update_responsavel, id_resp], (err) => {
      if (err) {
        return reject(err);
      }
      //-------------Telefone Looping EDIT SAVE-----------------------------
      let telefones = req.body.telefones;
      let i = 0;
      for (props in telefones) {
        let id_tel = telefones[i].id;

        if (
          (typeof telefones[i].id_resp === "undefined" ||
            typeof telefones[i].id_resp === "NULL") &&
          telefones[i].telefone !== "delete"
        ) {
          let new_telefone = {
            id_resp: id_resp,
            telefone: req.body.telefones[i].telefone,
            created: req.body.telefones[i].created,
            modified: new Date(),
          };

          connection.query(
            "INSERT INTO resp_telefone SET ?",
            new_telefone,
            (err) => {
              if (!err) {
              } else {
                console.log(err);
              }
            }
          );
        } else if (telefones[i].telefone === "delete") {
          let sql = "DELETE FROM resp_telefone WHERE id= ?;";
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

          let sql = "UPDATE resp_telefone SET ? WHERE id_resp = ? AND id = ?";
          connection.query(sql, [update_telefone, id_resp, id_tel], (err) => {
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
          (typeof celulares[i_cel].id_resp === "undefined" ||
            typeof celulares[i_cel].id_resp === "NULL") &&
          celulares[i_cel].numero !== "delete"
        ) {
          let new_celular = {
            id_resp: id_resp,
            ddd: celulares[i_cel].ddd,
            numero: celulares[i_cel].numero,
            app: app.trim(),
            created: celulares[i_cel].created,
            modified: new Date(),
          };

          connection.query(
            "INSERT INTO resp_celular SET ?",
            new_celular,
            (err) => {
              if (!err) {
              } else {
                console.log(err);
              }
            }
          );
        } else if (celulares[i_cel].numero === "delete") {
          let sql = "DELETE FROM resp_celular WHERE id= ?;";
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

          let sql = "UPDATE resp_celular SET ? WHERE id_resp = ? AND id = ?";
          connection.query(sql, [update_celular, id_resp, id_cel], (err) => {
            if (err) {
              return reject(err);
            }
          });
        } //else

        i_cel++;
      } //for Tel Edit Save

      //---------------------------------------------------------------------------------------------
      //---------------------------------UPDATE VINCULO ALUNO RESPONSAVEL----------------------------
      //---------------------------------------------------------------------------------------------
      let sql =
        "SELECT * FROM aluno AS body  WHERE id_resp = ? AND vinculado_resp = 'sim' ";
      console.log(id_resp);
      connection.query(sql, id_resp, (err, results) => {
        if (err) {
          return console.log(err);
        }
        results[0].body = req.body;

        results[0].body.id = results[0].id;
        results[0].body.id_resp = results[0].id_resp;
        results[0].body.vinculado_resp = "sim";
        results[0].body.celulares = [];
        results[0].body.telefones = [];

        alunoUpdate(results[0]);
      });
      //---------------------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------------------
      return resolve(resolve);
    });
  });
};

//-------------------------------------- EDIT VIEW RESPONSAVEL----------------------------------------
responsavelTable.edit = async (id) => {
  return new Promise((resolve, reject) => {
    let tel_edit_view = {};
    let cel_edit_view = {};

    //----------CEL---------

    let sql_cel = "SELECT * FROM resp_celular WHERE id_resp = ?";

    connection.query(sql_cel, id, (err, results_cel) => {
      cel_edit_view = results_cel;
    });

    //----------TEL---------

    let sql_tel = "SELECT * FROM resp_telefone WHERE id_resp = ?";
    connection.query(sql_tel, id, (err, results_tel) => {
      tel_edit_view = results_tel;
    });

    //----------------------------------

    let sql = "SELECT * FROM responsavel WHERE responsavel.id = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }
      //------------tel FOR--------------
      results[0].telefones = [];
      for (let l = 0; l < tel_edit_view.length; l++) {
        if (results[0].id == tel_edit_view[l].id_resp) {
          results[0].telefones[l] = tel_edit_view[l];
        }
      }

      //------------cel FOR--------------

      results[0].celulares = [];
      for (let l = 0; l < cel_edit_view.length; l++) {
        if (results[0].id == cel_edit_view[l].id_resp) {
          results[0].celulares[l] = cel_edit_view[l];
        }
      }
      //------------------------------------------------------------------------------------------
      return resolve(results[0]);
    });
  });
};
//---------------------------------------VIEW RESPONSAVEL-----------------------------------------
responsavelTable.view = async () => {
  return new Promise((resolve, reject) => {
    let tel = {};
    let cel = {};

    connection.query(
      " SELECT nome, numero, id_resp, ddd, app FROM responsavel,  resp_celular WHERE responsavel.id = id_resp",
      (err, results) => {
        cel = results;
      }
    );
    connection.query(
      " SELECT nome, telefone, id_resp, ddd FROM responsavel, resp_telefone WHERE responsavel.id = id_resp",
      (err, results) => {
        tel = results;
      }
    );

    connection.query(" SELECT * FROM responsavel", (err, results) => {
      if (err) {
        return reject(err);
      }
      for (let i = 0; i < results.length; i++) {
        results[i].temp_telefone = "";
        results[i].temp_celular = "";
        //--------------Data Format---------------------------
        var data = new Date(results[i].created);
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        //----------------------------------------------------------
        results[i].created = dia + "/" + mes + "/" + ano;

        for (let l = 0; l < cel.length; l++) {
          if (results[i].id == cel[l].id_resp) {
            results[i].temp_celular +=
              "(" + cel[l].ddd + ") " + cel[l].numero + " " + cel[l].app + " ";
          }
        }

        for (let j = 0; j < tel.length; j++) {
          if (results[i].id == tel[j].id_resp) {
            results[i].temp_telefone += tel[j].telefone + " ";
          }
        }
      }
      return resolve(results);
    });
  });
};

module.exports = responsavelTable;
