const express = require("express");
const app = express();
const PORT = process.env.PORT || 6464;
const connectDB = require("./config/db");
const routes = require("./routes/index");
const path = require("path");
app.use(express.json());
let static_path = path.join(__dirname, "./public");
// console.log(static_path);
app.use(express.static(static_path));
// template engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

connectDB();
app.use("/api/files", routes);
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));
app.listen(PORT, () => {
  console.log(`your server is connected at ${PORT}`);
});
