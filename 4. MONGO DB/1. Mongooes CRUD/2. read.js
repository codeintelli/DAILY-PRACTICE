const mongo = require("mongoose");
const fs = require("fs");
// !this part return a promise it will tell you in future, in promise we facing some error

// ~creating connection and creating database this database will not show in the compass because mongo have its own rule that one record will be inserted in selected database
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

// *schema
// ~ in mongoose the schema defines the structure of the document default value,validation,etc.
// ~ this is instance so we can give this type name

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
// ?model
// ~ a mongooes model is a wrapper on the Mongooes Schema.
// ~ a monogo schema defines the structure of the document,default value,validator,etc. whereas a mongoose model provides an interface to the database for creating,querying,updating,deleting records,etc.

// ~ but here we are creating class
// ~ const Data = new mongoose.model("collection_name{must be in sungular}","define schema that we have created before");

// todo:create collection
const collection_name = new mongo.model("mongoData", dataSchema);

const readData = async () => {
  try {
    const result = await collection_name.find({ active: true });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const readDataAdvance = async () => {
  try {
    // all record which ctype is Native Mobile Development will be displayed
    const result = await collection_name.find({
      ctype: "Native Mobile Development",
    });
    // here first record will be skipped and remaining record will be displayed
    const skip = await collection_name
      .find({ ctype: "Native Mobile Development" })
      .skip(1);
    // here only first record will be displayed if we extend limit then we see more records
    const limit = await collection_name
      .find({ ctype: "Native Mobile Development" })
      .limit(1);
    //   here we will display only name of the record which comes under ctype: "Native Mobile Development",
    const select = await collection_name
      .find({ ctype: "Native Mobile Development" })
      .select({ name: 1 });

    const multipleSelect = await collection_name
      .find({ ctype: "Native Mobile Development" })
      .select({ name: 1, _id: 0, ctype: 1, active: 1 });
    console.log("\n\n\n\n using normal \n \n", result);
    console.log("\n\n\n\n using skip command\n \n", skip);
    console.log("\n\n\n\n using limit command \n \n", limit);
    console.log("\n\n\n\n using Select command\n \n", select);
    console.log("\n\n\n\n using Multiple Select command\n \n", multipleSelect);
  } catch (e) {
    console.log(e);
  }
};
readData();
readDataAdvance();
