"use strict";
const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "jovanb",
  password: "Bienvenu",
  database: "allcoach",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Base de données connectée!");
});

module.exports = dbConn;
