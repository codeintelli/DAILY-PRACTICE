const express = require("express");
const app = express();
require("./db/connection");
const MensRanking = require("./model/mens");
const routerFile = require("./router/routerfile");
const port = process.env.PORT || 1100;
app.use(express.json());
app.use(routerFile);

app.post("/mens", async (req, res) => {
  
});
app.listen(port, () => {
  console.log(
    `your server is running successfully on http://localhost:${port}`
  );
});
