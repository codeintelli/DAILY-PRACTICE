const express = require("express");
const chalk = require("chalk");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 6464;

// public static path
const absolutePath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const PartialPath = path.join(__dirname, "../template/partial");
// for using handlebars we need hbs
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(PartialPath);

app.use(express.static(absolutePath));

app.get("", (req, res) => {
  res.render("index");
});
app.get("/home", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Oops!",
    errorMsgCol: "404",
    errMsgrem: "Page Not Found",
  });
});
app.listen(port, () => {
  console.log(
    chalk.bgHex("#ecf0f1").bold.green("server connected successfully")
  );
});
