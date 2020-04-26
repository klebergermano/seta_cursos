const connection = require("../../config/connection");

async function alunoView(req) {
  return new Promise((resolve, reject) => {
    var tel = {};
    var cel = {};

    connection.query(
      " SELECT nome, numero, id_aluno, ddd, app FROM aluno,  aluno_celular WHERE aluno.id = id_aluno",
      (err, results) => {
        cel = results;
      }
    );
    connection.query(
      " SELECT nome, telefone, id_aluno, ddd FROM aluno, aluno_telefone WHERE aluno.id = id_aluno",
      (err, results) => {
        tel = results;
      }
    );

    connection.query(" SELECT * FROM aluno", (err, results) => {
      if (err) {
        return reject(err);
      }
      for (let i = 0; i < results.length; i++) {
        let k = 0;
        let y = 0;
        results[i].temp_telefone = "";
        results[i].temp_celular = "";
        results[i].celulares = [];
        results[i].telefones = [];
        /*
        //--------------Data Format---------------------------
        var data = new Date(results[i].created);
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        //-----------------------------------------------------
        results[i].created = dia + "/" + mes + "/" + ano;
        */

        for (let l = 0; l < cel.length; l++) {
          if (results[i].id == cel[l].id_aluno) {
            results[i].celulares[k] = cel[l];

            results[i].temp_celular +=
              "(" + cel[l].ddd + ") " + cel[l].numero + " " + cel[l].app + " ";
            k++;
          }
        }

        for (let j = 0; j < tel.length; j++) {
          if (results[i].id == tel[j].id_aluno) {
            results[i].telefones[y] = tel[j];

            results[i].temp_telefone +=
              "(" + tel[y].ddd + ") " + tel[j].telefone + " ";
            y++;
          }
        }
      }
      return resolve(results);
    });
  });
}

module.exports = alunoView;
