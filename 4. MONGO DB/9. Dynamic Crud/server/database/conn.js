const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //   mongo db connection string
    const con = mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    if (con) {
      console.log(`database connected successfully`);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = connectDB;
