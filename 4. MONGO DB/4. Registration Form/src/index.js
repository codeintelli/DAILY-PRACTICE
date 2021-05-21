const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const Registration = require("./models/schemaAndModel");
require("./db/conn");
const port = process.env.PORT || 64;

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

app.get("/registration", (req, res) => {
  res.render("registration");
});
app.get("/success", (req, res) => {
  res.render("success");
});

// add user data into database
app.post("/registration", async (req, res) => {
  try {
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
    if (password === confirm_password) {
      const RegisterUser = new Registration({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
      });
      const insertData = await RegisterUser.save();
      res.status(200).render("success");
      console.log(insertData);
    } else {
      res
        .status(404)
        .send(
          "<h1>confirm password dosent match please enter valid password</h1>"
        );
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
app.listen(port, () => {
  console.log(`database is successfully created http://localhost:${port}`);
});
