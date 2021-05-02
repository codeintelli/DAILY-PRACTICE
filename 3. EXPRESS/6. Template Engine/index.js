const express = require("express");
const app = express();
const path = require("path");
const port = 6464;
// for dynamic data we must use template engine and express provides us ejs,pug,handlebars
const absolutePath = path.join(__dirname, "./public");
// for using handlebars we need hbs
app.set("view engine", "hbs");
app.use(express.static(absolutePath));

app.get("/", (req, res) => {
  res.render("index", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    SESSION_NAME_BLACK: "WI",
    SESSION_NAME_BLUE: "NT",
    SESSION_NAME_BLACK_REM: "ER",
  });
});
app.get("/", (req, res) => {
  res.send("hello from the user");
});

app.listen(port);
