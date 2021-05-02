const mongoose = require("mongoose");
// const url = `mongodb://127.0.0.1:27017/itvmh`;
// const DB = process.env.URL;
const DB = `mongodb+srv://shiva_2205:shiva@itvmhcluster.66siq.mongodb.net/itvmh?retryWrites=true&w=majority`;
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
