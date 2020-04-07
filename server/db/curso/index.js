const connection = require("../../config/connection");
const cursoView = require("./cursoView");
const cursoAdd = require("./cursoAdd");
const cursoViewEdit = require("./cursoViewEdit");
const cursoUpdate = require("./cursoUpdate");

let cursoTable = {};
//----------------------------------------UPDATE CURSO------------------------------------------
cursoTable.update = async req => {
  return cursoUpdate(req);
};
//-------------------------------------- EDIT VIEW CURSO ----------------------------------------
cursoTable.edit = async id => {
  return cursoViewEdit(id);
};

//---------------------------------------CADASTRO CURSO------------------------------------------
cursoTable.insert = async req => {
  console.log("------------------------------------------------------");
  return cursoAdd(req);
};
//---------------------------------------ALL CURSO-----------------------------------------------

cursoTable.view = async () => {
  return cursoView();
};

module.exports = cursoTable;
