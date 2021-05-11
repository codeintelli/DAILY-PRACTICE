const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 64;
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");

dotenv.config({ path: "../config.env" });
// requiring mongo db files
require("./db/connection");
const UserData = require("./model/schema");

// paths for dynamic content files
const public_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../template/partials");
const view_path = path.join(__dirname, "../template/views");

// using express and setting paths
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partial_path);
app.use(express.static(public_path));

app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);

app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);

// creating route

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.post("/index", async (req, res) => {
  try {
    const user = new UserData(req.body);
    const response = await user.save();
    // res.render("/");
    res.render("index");
  } catch (e) {
    console.log(e);
    res.status(404).render("error");
  }
});

app.get("/api", async (req, res) => {
  try {
    const data = await UserData.find({});
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

app.get("*", (req, res) => {
  res.status(404).render("error");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
