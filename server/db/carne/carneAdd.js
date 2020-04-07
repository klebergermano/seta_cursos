const connection = require("../../config/connection");

async function carneAdd(req) {
  return new Promise((resolve, reject) => {
    let new_carne = {
      id_contrato: req.body.carne.id_contrato,
      id_resp: req.body.carne.id_resp,
      id_curso: req.body.carne.id_curso,
      id_aluno: req.body.carne.id_aluno,

      responsavel: req.body.carne.responsavel,
      curso: req.body.carne.curso,
      aluno: req.body.carne.aluno,

      parcelas: req.body.carne.parcelas,
      valor: req.body.carne.valor,

      desconto: req.body.carne.desconto,
      valor_total: req.body.carne.valor_total,
      obs: req.body.carne.obs,

      vencimento: req.body.carne.data_contrato,
      created: req.body.carne.created,
      modified: new Date()
    };

    connection.query("INSERT INTO carne SET ?", new_carne, err => {
      if (!err) {
        for (let index in req.body.carne_folhas) {
          let new_folha = {
            id_resp: req.body.carne_folhas[index].id_resp,
            id_curso: req.body.carne_folhas[index].id_curso,
            id_aluno: req.body.carne_folhas[index].id_aluno,
            id_carne: req.body.carne_folhas[index].id_carne,

            responsavel: req.body.carne_folhas[index].responsavel,
            curso: req.body.carne_folhas[index].curso,
            aluno: req.body.carne_folhas[index].aluno,

            n_lanc: req.body.carne_folhas[index].n_lanc,
            parcela: req.body.carne_folhas[index].parcela,
            valor: req.body.carne_folhas[index].valor,

            desconto: req.body.carne_folhas[index].desconto,
            valor_total: req.body.carne_folhas[index].valor_total,

            vencimento: req.body.carne_folhas[index].vencimento,
            created: req.body.carne_folhas[index].created,
            modified: new Date()
          };
          connection.query("INSERT INTO carne_folha SET ?", new_folha, err => {
            if (!err) {
            } else {
              console.log(err);
            }
          });
        }
      } else {
        console.log(err);
        return reject(err);
      }
    });
    return resolve(true);
  });
}

module.exports = carneAdd;
