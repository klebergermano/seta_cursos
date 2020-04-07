const connection = require("../../config/connection");

async function contratoAdd(req) {
  return new Promise((resolve, reject) => {
    let new_contrato = {
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
    connection.query("INSERT INTO contrato SET ?", new_contrato, err => {
      if (!err) {
      } else {
        console.log(err);
        return reject(err);
      }
    });
    return resolve(true);
  });
}

module.exports = contratoAdd;
