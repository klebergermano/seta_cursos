const connection = require("../../config/connection");

async function contratoUpdate(req) {
  return new Promise((resolve, reject) => {
    let id = req.body.id;

    let update_contrato = {
      id_resp: req.body.id_resp,
      id_curso: req.body.id_curso,
      id_aluno: req.body.id_aluno,
      id_carne: "",

      responsavel: req.body.responsavel,
      aluno: req.body.aluno,
      curso: req.body.curso,
      cpf: req.body.cpf,

      duracao: req.body.duracao,
      parcelas: req.body.parcelas,
      horas_aula: req.body.horas_aula,
      valor: req.body.valor,
      valor_total: req.body.valor_total,

      desconto: req.body.desconto,
      obs: req.body.obs,
      data_contrato: req.body.data_contrato,

      created: req.body.created,
      vencimento: req.body.vencimento,
      modified: new Date(),
    };

    let sql = "UPDATE contrato SET ? WHERE id = ?";

    connection.query(sql, [update_contrato, id], (err) => {
      if (err) {
        return reject(err);
      }
      connection.query(
        "SELECT * FROM carne WHERE id_contrato = ?",
        id,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              var id_carne = results[i].id;
              console.log(id_carne);
              /*deleta carne pertecente ao contrato editado*/

              connection.query(
                " DELETE  FROM carne WHERE id = ?",
                [id_carne],
                (err) => {
                  if (err) {
                    console.log(err);
                  }
                  //Seleciona as folhas do carne pertecente ao contrato
                  connection.query(
                    "SELECT * FROM carne_folha WHERE id_carne = ?",
                    [id_carne],
                    (err, results_folha) => {
                      if (err) {
                        console.log(err);
                      }

                      for (let j = 0; j < results_folha.length; j++) {
                        console.log(results_folha[j].id);
                        let id_folha = results_folha[j].id;
                        //deleta as folhas do carne pertecente ao contrato
                        connection.query(
                          " DELETE  FROM carne_folha WHERE id = ?",
                          id_folha,
                          (err) => {
                            if (err) {
                              console.log(err);
                            }
                          }
                        );
                      } //for folha
                    }
                  );
                }
              ); //delete carne query
            } //for carne
          }
          return resolve(resolve);
        }
      );

      return resolve(resolve);
    });
  });
}

module.exports = contratoUpdate;
