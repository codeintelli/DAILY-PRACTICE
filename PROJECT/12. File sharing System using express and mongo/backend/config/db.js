require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  //Database Connection
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(process.env.MONGO_CONNECTION_URL);
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = connectDB;
