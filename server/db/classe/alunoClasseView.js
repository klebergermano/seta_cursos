const connection = require("../../config/connection");

async function alunoClasseView() {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM aluno_classe", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}

module.exports = alunoClasseView;
