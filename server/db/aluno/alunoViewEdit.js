const connection = require("../../config/connection");

async function editViewAluno(id) {
  return new Promise((resolve, reject) => {
    let tel_edit_view = {};
    let cel_edit_view = {};

    //----------CEL---------

    let sql_cel = "SELECT * FROM aluno_celular WHERE id_aluno = ?";

    connection.query(sql_cel, id, (err, results_cel) => {
      cel_edit_view = results_cel;
    });

    //----------TEL---------

    let sql_tel = "SELECT * FROM aluno_telefone WHERE id_aluno = ?";
    connection.query(sql_tel, id, (err, results_tel) => {
      tel_edit_view = results_tel;
    });

    //----------------------------------

    let sql = "SELECT * FROM aluno WHERE aluno.id = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }
      //------------tel FOR--------------
      results[0].telefones = [];
      for (let l = 0; l < tel_edit_view.length; l++) {
        if (results[0].id == tel_edit_view[l].id_aluno) {
          results[0].telefones[l] = tel_edit_view[l];
        }
      }

      //------------cel FOR--------------

      results[0].celulares = [];
      for (let l = 0; l < cel_edit_view.length; l++) {
        if (results[0].id == cel_edit_view[l].id_aluno) {
          results[0].celulares[l] = cel_edit_view[l];
        }
      }
      //--------------------------------------------
      return resolve(results[0]);
    });
  });
}

module.exports = editViewAluno;
