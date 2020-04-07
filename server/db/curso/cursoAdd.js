const connection = require("../../config/connection");

async function cursoAdd(req) {
  return new Promise((resolve, reject) => {
    let new_curso = {
      nome: req.body.curso,
      duracao: req.body.duracao,
      valor: req.body.valor,
      obs: req.body.obs,

      created: req.body.created,
      modified: new Date()
    };
    connection.query("INSERT INTO curso SET ?", new_curso, err => {
      if (!err) {
      } else {
        console.log(err);
        return reject(err);
      }
    });
    return resolve(true);
  });
}

module.exports = cursoAdd;
