const connection = require("../../config/connection");

async function contratoEditView(id) {
  return new Promise((resolve, reject) => {
    //----------------------------------

    let sql = "SELECT * FROM contrato WHERE id = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }

      //--------------------------------------------
      return resolve(results[0]);
    });
  });
}

module.exports = contratoEditView;
