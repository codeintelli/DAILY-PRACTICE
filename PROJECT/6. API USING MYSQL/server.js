require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const routes = require("./Router/index");
const port = 6464;
app.use(routes);
app.listen(port, () => {
  console.log("express application started");
});
