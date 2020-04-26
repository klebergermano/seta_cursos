const connection = require("../../config/connection");
const util = require("util");
const editViewAluno = require("./alunoViewEdit");
const cadastrarAluno = require("./alunoCadastrar");
const alunoView = require("./alunoView");
const updateAluno = require("./alunoUpdate");
let alunoTable = {};
//----------------------------------------UPDATE aluno------------------------------------------
alunoTable.put = async (req) => {
  return updateAluno(req);
};

//-------------------------------------- EDIT VIEW ALUNO ----------------------------------------
alunoTable.edit = async (id) => {
  return editViewAluno(id);
};

//---------------------------------------CADASTRO ALUNO------------------------------------------
alunoTable.cadastrar = async (req) => {
  return cadastrarAluno(req);
};
//---------------------------------------ALL ALUNO-----------------------------------------------
alunoTable.view = async () => {
  return alunoView();
};

module.exports = alunoTable;
