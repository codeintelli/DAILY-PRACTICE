require("dotenv").config({ path: "../config.env" });
require("./database/connection");
// require("cookie-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6464;
const routes = require("./Routes/auth");

/* 
?middleware function are function that have access to the request object(req,res and next) the next function is a function in the express router which when invoked executes the middleware succeeding the current middleware
*/
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);

// app.use();
app.listen(port, () => {
  console.log(`your server is running on http://localhost:${port}`);
});
