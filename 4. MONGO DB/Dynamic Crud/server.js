// import files and packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 30;
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const router = require("./server/routes");

// !call connection file
const connectDB = require("./server/database/conn");

// log requests
app.use(morgan("tiny"));

// mongodb Connection
connectDB();

// parse request to body parser parse
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views"));

// load asset
app.use("/css", express.static(path.resolve(__dirname, "./assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "./assets/js")));

// router path
app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
