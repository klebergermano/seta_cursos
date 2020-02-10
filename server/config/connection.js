const mysql = require("mysql");
const configDB = require("./index.js");
const connection = mysql.createConnection(configDB);
module.exports = connection;
