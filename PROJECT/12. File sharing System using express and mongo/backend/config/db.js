require("dotenv").config({ path: "config.env" });
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
      console.log("Database Connected");
      // console.log(process.env.MONGO_CONNECTION_URL);
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = connectDB;
