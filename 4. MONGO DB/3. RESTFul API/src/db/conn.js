const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Restfull-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connnection is successfully eastablish to database`);
  })
  .catch((e) => {
    console.log(`connection have some error please check code`);
  });
