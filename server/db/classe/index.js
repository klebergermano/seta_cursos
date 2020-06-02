const connection = require("../../config/connection");
const alunoClasseView = require("./alunoClasseView");
//const cursoAdd = require("./cursoAdd");
//const cursoViewEdit = require("./cursoViewEdit");
const alunoClasseUpdate = require("./alunoClasseUpdate");

let alunoClasseTable = {};
//----------------------------------------UPDATE CURSO------------------------------------------
alunoClasseTable.update = async (req) => {
  return alunoClasseUpdate(req);
};
/*
//-------------------------------------- EDIT VIEW CURSO ----------------------------------------
cursoTable.edit = async id => {
  return cursoViewEdit(id);
};

//---------------------------------------CADASTRO CURSO------------------------------------------
cursoTable.insert = async req => {
  console.log("------------------------------------------------------");
  return cursoAdd(req);
};
*/

//---------------------------------------View classe Aluno-----------------------------------------------
alunoClasseTable.view = async () => {
  return alunoClasseView();
};

module.exports = alunoClasseTable;
