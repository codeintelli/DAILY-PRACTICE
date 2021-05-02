const express = require("express");
const port = 6464;
const path = require("path");
const app = express();

/* besically we have 2 paths 
relative paths
../../../
and absolute path
__dirname

*/

const static_path = path.join(__dirname, "./public");
// builtin middleware
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Hello from itvmh");
});
app.get("*", (req, res) => {
  res.send();
});
app.listen(6464);
