const mongoose = require("mongoose");
const dbname = "Main-API";
const mongolink = `mongodb://127.0.0.1:27017/${dbname}`;
mongoose
  .connect(mongolink, {
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
