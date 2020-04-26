const connection = require("../../config/connection");

async function carneView(req) {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM carne", (err, results) => {
      if (err) {
        return reject(err);
      }
      // SHOW TABLE STATUS LIKE 'carne'
      connection.query(
        "SHOW TABLE STATUS LIKE 'carne'",
        (err, results_carne_id) => {
          if (!err) {
            if (typeof results[0] !== "undefined") {
              results[0].novo_id = results_carne_id[0].Auto_increment;
            }
            return resolve(results);
          }
        }
      );
    });
  });
}

module.exports = carneView;
