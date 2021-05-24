const { createPool } = require("mysql");
const Pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "nodedb",
  connectionLimit: 10,
});

module.exports = Pool;
