const connection = require("../../config/connection");

async function alunoClasseUpdate(req) {
  return new Promise((resolve, reject) => {
    console.log(req.body);
    let id = req.body.id;

    let update_aluno_classe = {
      id_curso: req.body.id_curso,
      id_aluno: req.body.id_aluno,
      nome: req.body.nome,
      curso: req.body.curso,
      duracao: req.body.duracao,
      data_contrato: req.body.data_contrato,
      data_inicio: req.body.data_inicio,
      turma: req.body.turma,
      aula_semana: req.body.aula_semana,
      obs: req.body.obs,

      data_conclusao_prevista: req.body.data_conclusao_prevista,
      data_conclusao_efetiva: req.body.data_conclusao_efetiva,
      status: req.body.status,
      created: req.body.created,
      modified: new Date(),
    };

    let sql = "UPDATE aluno_classe SET ? WHERE id = ?";

    connection.query(sql, [update_aluno_classe, id], (err) => {
      if (err) {
        return reject(err);
      }

      return resolve(resolve);
    });
  });
}

module.exports = alunoClasseUpdate;
