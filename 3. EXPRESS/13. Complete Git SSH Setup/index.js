const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = 6464;
// for dynamic data we must use template engine and express provides us ejs,pug,handlebars
const absolutePath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./template/views");
const PartialPath = path.join(__dirname, "./template/partials");
// for using handlebars we need hbs
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(PartialPath);

app.use(express.static(absolutePath));
app.get("/", (req, res) => {
  res.render("index", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "shop.svg",
    SESSION_NAME_BLACK: "WI",
    SESSION_NAME_BLUE: "NT",
    SESSION_NAME_BLACK_REM: "ER",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("/man", (req, res) => {
  res.render("man", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "man.svg",
    SESSION_NAME_BLACK: "M",
    SESSION_NAME_BLUE: "A",
    SESSION_NAME_BLACK_REM: "N",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("/women", (req, res) => {
  res.render("women", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "women.svg",
    SESSION_NAME_BLACK: "WO",
    SESSION_NAME_BLUE: "ME",
    SESSION_NAME_BLACK_REM: "N",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("/kids", (req, res) => {
  res.render("kids", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "kids.svg",
    SESSION_NAME_BLACK: "K",
    SESSION_NAME_BLUE: "ID",
    SESSION_NAME_BLACK_REM: "S",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("/bags", (req, res) => {
  res.render("bags", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "bags.svg",
    SESSION_NAME_BLACK: "B",
    SESSION_NAME_BLUE: "AG",
    SESSION_NAME_BLACK_REM: "S",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("/watch", (req, res) => {
  res.render("watch", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "watch.svg",
    SESSION_NAME_BLACK: "WA",
    SESSION_NAME_BLUE: "TC",
    SESSION_NAME_BLACK_REM: "HES",
    SECONDARY_TEXT: "COLLEC",
    SECONDARY_TEXT_COLOR: "TION",
  });
});

app.get("*", (re, rq) => {
  rq.render("404", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    header_image: "404.svg",
    SESSION_NAME_BLACK: "404 ERROR ",
    SESSION_NAME_BLUE: "Page Not Found",
    SESSION_NAME_BLACK_REM: " Sorry ",
  });
});

app.get("/", (req, res) => {
  res.send("hello from the user");
});

app.listen(port);
