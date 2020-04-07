const connection = require("../../config/connection");

async function contratoUpdate(req) {
  return new Promise((resolve, reject) => {
    let id = req.body.id;

    let update_contrato = {
      id_resp: req.body.id_resp,
      id_curso: req.body.id_curso,
      id_aluno: req.body.id_aluno,

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
      modified: new Date()
    };

    let sql = "UPDATE contrato SET ? WHERE id = ?";

    connection.query(sql, [update_contrato, id], err => {
      if (err) {
        return reject(err);
      }

      return resolve(resolve);
    });
  });
}

module.exports = contratoUpdate;
