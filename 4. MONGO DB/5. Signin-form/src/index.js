const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const Registration = require("./models/schemaAndModel");
require("./db/conn");
const port = process.env.PORT || 6464;

const static_path = path.join(__dirname, "../public");
const PartialPath = path.join(__dirname, "../templates/partials");
const templatePath = path.join(__dirname, "../templates/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(PartialPath);
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Registration.findOne({ email: email });
    // res.send(useremail);
    if (useremail.password === password) {
      res.status(200).render("index");
    } else {
      res.status(404).send("password dosen't exist");
    }
  } catch (e) {
    console.log(e);
    res.status(404).send("invalid email");
  }
});

app.get("/registration", (req, res) => {
  // res.render("registration");
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(port, () => {
  console.log(`database is successfully created http://localhost:${port}`);
});
