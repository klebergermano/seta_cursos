const connection = require("../../config/connection");

async function cursoViewEdit(id) {
  return new Promise((resolve, reject) => {
    //----------------------------------

    let sql = "SELECT * FROM curso WHERE id = ?";
    connection.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }

      //--------------------------------------------
      return resolve(results[0]);
    });
  });
}

module.exports = cursoViewEdit;
