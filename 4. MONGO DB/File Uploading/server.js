const express = require("express");
const app = express();
const path = require("path");
// const hbs = require("hbs");
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 64;

const RouterPath = require("./SERVER/routes/routes");
require("./SERVER/database/connection");
app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "./public")));
// setup view engine
// setup view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "./views"),
    partialsDir: path.join(__dirname, "./views/partials"),
  })
);

// routes
app.use(RouterPath);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
