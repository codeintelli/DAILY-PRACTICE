const express = require("express");
const app = express();
const port = 5454;
app.get("/", (req, res) => {
  res.send("<h1>Hello From Home</h1>");
});

app.get("/two", (req, res) => {
  res.write("<h1>Hello From One</h1>");
  res.write("<h1>Hello From Two</h1>");
  //   res.send();
});
app.get("/json", (req, res) => {
  res.send([
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
  ]);
});

/* 
! The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.
*/
app.get("/api", (req, res) => {
  res.json([
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
    {
      name: "shiva",
      sem: "4th",
      active: true,
    },
  ]);
});

app.listen(port);
