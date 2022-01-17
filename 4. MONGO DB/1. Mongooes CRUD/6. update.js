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

const updateDocument = async (id) => {
  try {
    //~if we are using _id on async then we can only put _id at updateOne due to object destructing
    // we can also use updateOne instead of findbyidandupdate but the key difference is that it show the result but in update one they cant show result that are modified and findbyidandupdate will show before updated result to show that what will be updated then you must write new true
    const result = await collection_name.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: "Mongoose JS ",
          ctype: "Middleware",
        },
      },
      { useFindAndModify: false, new: true }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
updateDocument("605591d54be30a06109c5c52");
