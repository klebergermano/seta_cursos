const connection = require("../../config/connection");

async function carneFolhaView(req) {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM carne_folha", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}

module.exports = carneFolhaView;
