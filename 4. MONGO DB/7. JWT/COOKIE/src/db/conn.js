const mongoose = require("mongoose");
const database_name = "Registration";
const url = `mongodb://127.0.0.1:27017/${database_name}`;
mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`your database is successfully connnected `);
  })
  .catch((e) => {
    console.log(e);
  });
