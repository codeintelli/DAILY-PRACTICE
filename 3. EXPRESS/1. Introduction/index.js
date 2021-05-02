/* 
TODO: use better command to see command in better view
! what is express
express is node js framework its the most popular framework as of now (the most statted on npm) 

expressjs is a web application framework that provides you with a simple API to build websites web apps and back ends.

WHY DO WE ACTUALLY NEED EXPRESS js
try to write a small REST API server in plain node js that is using only core modules and then in express the latter will take you 5-10x less time and lines of code.

to use express you have to preform this command 


npm init -y
npm install express

*/
const express = require("express");
const app = express();
/*  
app.get(route,callback)
app.post
app.put
app.delete

*/
app.get("/", (req, res) => {
  /*
    res bydefault method that we are using in express 
    ? res.render();
    ? res.send();
    ? res.status();
    ? res.redirect();
    ? res.json();
    ? res.end();
    ? res.write();
    here 
    https://xyz.com/home_page?=express

    ! home_page?=express 
    * it is your route wher we want to perform operation
    */

  res.send("Hello from the user");
});

app.get("/about", (req, res) => {
  console.log("we are listining the about page");
});
app.listen(8000, () => {
  console.log("server is ready without any error");
});
