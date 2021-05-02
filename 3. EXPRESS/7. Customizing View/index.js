const express = require("express");
const app = express();
const path = require("path");
const port = 6464;
// for dynamic data we must use template engine and express provides us ejs,pug,handlebars
const absolutePath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./template");
// for using handlebars we need hbs
app.set("view engine", "hbs");
app.set("views", templatePath);
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

// app.get("/about", (res, req) => {
//   res.render("about", {
//     LOGO_FIRST: "IT",
//     LOGO_SECOND: "VMH",
//     SESSION_NAME_BLACK: "Welcome",
//     SESSION_NAME_BLUE: " to ",
//     SESSION_NAME_BLACK_REM: " about us page ",
//   });
// });
app.get("/about", (re, rq) => {
  rq.render("about", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    SESSION_NAME_BLACK: "Welcome to ",
    SESSION_NAME_BLUE: "about us",
    SESSION_NAME_BLACK_REM: " page ",
  });
});

app.get("/feedback", (re, rq) => {
  rq.render("feedback", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    SESSION_NAME_BLACK: "Welcome to ",
    SESSION_NAME_BLUE: "Feedback",
    SESSION_NAME_BLACK_REM: " page ",
  });
});

app.get("/*", (re, rq) => {
  rq.render("about", {
    LOGO_FIRST: "IT",
    LOGO_SECOND: "VMH",
    SESSION_NAME_BLACK: "404 ERROR ",
    SESSION_NAME_BLUE: "Page Not Found",
    SESSION_NAME_BLACK_REM: " Sorry ",
  });
});

app.get("/", (req, res) => {
  res.send("hello from the user");
});

app.listen(port);
