const contratoView = require("./contratoView");
const contratoAdd = require("./contratoAdd");
const contratoEditView = require("./contratoEditView");
const contratoUpdate = require("./contratoUpdate");

let contratoTable = {};
//----------------------------------------UPDATE contrato------------------------------------------
contratoTable.update = async req => {
  return contratoUpdate(req);
};

//-------------------------------------- EDIT VIEW contrato ----------------------------------------
contratoTable.editView = async id => {
  return contratoEditView(id);
};

//---------------------------------------CADASTRO contrato------------------------------------------
contratoTable.add = async req => {
  return contratoAdd(req);
};
//---------------------------------------ALL contrato-----------------------------------------------
contratoTable.view = async () => {
  return contratoView();
};

module.exports = contratoTable;
