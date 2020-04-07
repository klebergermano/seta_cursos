const carneView = require("./carneView");
const carneFolhaView = require("./carneFolhaView");
const carneAdd = require("./carneAdd");
const carneEditView = require("./carneEditView");
const carneFolhaEditView = require("./carneFolhaEditView");
const carneUpdate = require("./carneUpdate");

let carneTable = {};
//----------------------------------------UPDATE carne------------------------------------------
carneTable.update = async req => {
  return carneUpdate(req);
};

//-------------------------------------- EDIT VIEW carne ----------------------------------------
carneTable.editView = async id => {
  return carneEditView(id);
};
//-------------------------------------- EDIT VIEW carne FOLHA ----------------------------------------
carneTable.folhaEditView = async id => {
  return carneFolhaEditView(id);
};

//---------------------------------------CADASTRO carne------------------------------------------
carneTable.add = async req => {
  return carneAdd(req);
};
//---------------------------------------VIEW carne FOLHA-----------------------------------------------
carneTable.folhaView = async () => {
  return carneFolhaView();
};
//---------------------------------------VIEW carne-----------------------------------------------
carneTable.view = async () => {
  return carneView();
};

module.exports = carneTable;
