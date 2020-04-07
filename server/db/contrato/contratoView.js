const connection = require("../../config/connection");

async function contratoView(req) {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM contrato", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}

module.exports = contratoView;
