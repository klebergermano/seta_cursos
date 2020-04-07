const connection = require("../../config/connection");

async function carneEditView(id) {
  return new Promise((resolve, reject) => {
    //----------------------------------

    let sql = "SELECT * FROM carne WHERE id = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }

      //--------------------------------------------
      console.log(results[0]);
      return resolve(results[0]);
    });
  });
}

module.exports = carneEditView;
