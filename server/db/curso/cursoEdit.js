const connection = require("../config/connection");

async function cursoEdit(req) {
  return new Promise((resolve, reject) => {
    let id = req.body.id;

    let update_curso = {
      nome: req.body.curso,
      duracao: req.body.duracao,
      obs: req.body.obs,
      valor: req.body.valor,

      created: req.body.created,
      modified: new Date()
    };

    let sql = "UPDATE aluno SET ? WHERE id = ?";

    connection.query(sql, [update_curso, id], err => {
      return resolve(true);
    });
  });
}

module.exports = cursoEdit;
