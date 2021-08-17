const mongoose = require("mongoose");
// const url = `mongodb://127.0.0.1:27017/itvmh`;
// const DB = process.env.URL;
const DB = `mongodb://127.0.0.1:27017/portfolio`;
console.log(DB);
mongoose
  .connect(DB, {
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
