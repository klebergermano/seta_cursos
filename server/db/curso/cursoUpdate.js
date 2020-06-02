const connection = require("../../config/connection");

async function cursoUpdate(req) {
  return new Promise((resolve, reject) => {
    let id = req.body.id;
    let update_curso = {
      nome: req.body.curso,
      duracao: req.body.duracao,
      valor: req.body.valor,
      obs: req.body.obs,

      created: req.body.created,
      modified: new Date(),
    };

    let sql = "UPDATE curso SET ? WHERE id = ?";

    connection.query(sql, [update_curso, id], (err) => {
      if (err) {
        return reject(err);
      }

      return resolve(resolve);
    });
  });
}

module.exports = cursoUpdate;
