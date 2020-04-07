const connection = require("../../config/connection");

async function carneFolhaEditView(id) {
  return new Promise((resolve, reject) => {
    //----------------------------------

    let sql = "SELECT * FROM carne_folha WHERE id_carne = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log(
        "------------------------------------------------------" + id
      );
      //--------------------------------------------
      return resolve(results);
    });
  });
}

module.exports = carneFolhaEditView;
