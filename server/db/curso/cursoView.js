const connection = require("../../config/connection");

async function cursoView(req) {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM curso", (err, results) => {
      if (err) {
        return reject(err);
      }
      for (let i = 0; i < results.length; i++) {
        //--------------Data Format---------------------------
        var data = new Date(results[i].created);
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        //-----------------------------------------------------
        results[i].created = dia + "/" + mes + "/" + ano;
      }
      return resolve(results);
    });
  });
}

module.exports = cursoView;
