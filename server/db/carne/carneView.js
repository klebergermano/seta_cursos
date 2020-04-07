const connection = require("../../config/connection");

async function carneView(req) {
  return new Promise((resolve, reject) => {
    connection.query(" SELECT * FROM carne", (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}

module.exports = carneView;
