const fs = require("fs");
const path = require("path");
const dbConnection = require("./dbConnection.js");

const sqlPath = path.join(__dirname, "dbBuild.sql");
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = (cb) => dbConnection.query(sql, cb);

runDbBuild();
module.exports = runDbBuild;
