const express = require("express");
const app = express();
const port = process.env.PORT || 6464;
const studentRouter = require("./router/student");
require("./db/conn");
const Student = require("./model/student");
app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(
    `connnection is successfully eastablish to server at http://localhost:${port} `
  );
});
// ?you dont neet express.json or express.urlencoded() for getting request or delete requests. we only need it for post and put request.
//  ~express.json() is a method inbuilt in express to recognized  the incoming request object as a json object. this method called as a middleware in your application using the code: app.use(express.json())
