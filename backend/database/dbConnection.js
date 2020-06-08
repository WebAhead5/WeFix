const { Pool } = require("pg");


require("dotenv").config();
let DB_URL = process.env.DB_URL;

if (!process.env.DB_URL) {
  throw new Error("DB_URL must be set");
}

if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}
console.log(DB_URL);

module.exports = new Pool({
  connectionString: DB_URL,

});

