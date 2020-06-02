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
      vencimento: req.body.vencimento,
      created: req.body.created,
      modified: new Date(),
    };

    connection.query("INSERT INTO contrato SET ?", new_contrato, (err) => {
      if (!err) {
        connection.query(
          "SELECT * FROM contrato ORDER BY ID DESC LIMIT 1",
          (err, result) => {
            console.log(result[0].id);
            if (!err) {
              console.log("insert ----------------------------------ok");
              let last_id_contrato;
              if (typeof result[0].id == "undefined") {
                last_id_contrato = 1;
              } else {
                last_id_contrato = result[0].id;
              }

              let data_vencimento = new Date(req.body.created);
              let duracao = parseInt(req.body.duracao);
              var conclusao_prevista = new Date(
                data_vencimento.setMonth(data_vencimento.getMonth() + duracao)
              );

              let new_aluno_classe = {
                id_curso: req.body.id_curso,
                id_aluno: req.body.id_aluno,
                id_contrato: last_id_contrato,
                nome: req.body.aluno,
                curso: req.body.curso,
                duracao: req.body.duracao,
                data_contrato: req.body.data_contrato,

                created: req.body.created,
                modified: new Date(),

                data_inicio: req.body.vencimento,

                turma: "Não Especificado",
                aula_semana: "Não Especificado",

                data_conclusao_prevista: conclusao_prevista,
                data_conclusao_efetiva: "Em andamento",
                status: "cursando",
              };
              connection.query(
                "INSERT INTO aluno_classe SET ?",
                new_aluno_classe,
                (err) => {
                  if (!err) {
                    console.log("cadastrado---------------------");
                  } else {
                    console.log(err);
                  }
                }
              );
            }
          }
        );
      } else {
        console.log(err);
        return reject(err);
      }
    });
    return resolve(true);
  });
}

module.exports = contratoAdd;
