const express = require("express");
const app = express();
const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost:27017/expressWithMongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your Database Is Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const dataSchema = new mongo.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const collection_name = new mongo.model("mongoData", dataSchema);
const insertOne = async () => {
  try {
    const demoPlaylist = new collection_name({
      name: "Demo",
      ctype: "Demo",
      videos: 0,
      author: "demo",
      active: false,
    });
    const result = await demoPlaylist.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
// insertOne();

const deleteDocument = async (_id) => {
  try {
    //   you can also use deleteOne() instead of findByIdAndDelete()
    const result = await collection_name.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument("605702060b0c692dfcd08f50");
