const connection = require("../config/connection");
const util = require("util");

let responsavelTable = {};

responsavelTable.all = async () => {
  return new Promise((resolve, reject) => {
    var tel = {};
    var cel = {};

    connection.query(
      " SELECT nome, celular, id_resp, ddd, app FROM responsavel,  resp_celular WHERE responsavel.id = id_resp",
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
              "(" + cel[l].ddd + ") " + cel[l].celular + " " + cel[l].app + " ";
          }
        }

        for (let j = 0; j < tel.length; j++) {
          if (results[i].id == tel[j].id_resp) {
            results[i].temp_telefone +=
              "(" + tel[j].ddd + ") " + tel[j].telefone + " ";
          }
        }
      }
      return resolve(results);
    });
  });
};

module.exports = responsavelTable;
