const mongoose = require("mongoose");
// this part return a promise it will tell you in future, in promise we facing some error

// creating connection and creating database this database will not show in the compass because mongo have its own rule that one record will be inserted in selected database
mongoose
  .connect("mongodb://localhost:27017/demodata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successfully establish....");
  })
  .catch((err) => {
    console.log(err);
  });

//   schema
// in mongoose the schema defines the structure of the document default value,validation,etc.
// this is instance so we can give this type name
const dataSchema = new mongoose.Schema({
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

// model
// a mongooes model is a wrapper on the Mongooes Schema.
// a monogo schema defines the structure of the document,default value,validator,etc. whereas a mongoose model provides an interface to the database for creating,querying,updating,deleting records,etc.

// but here we are creating class
// const Data = new mongoose.model("collection_name{must be in sungular}","define schema that we have created before");

// create collection
const Data = new mongoose.model("itdata", dataSchema);

// create document or insert
const createDocument = async () => {
  try {
    const nodePlaylist = new Data({
      name: "React JS",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const result = await nodePlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

const insertMultipleDocuments = async () => {
  try {
    const MongoPlaylist = new Data({
      name: "Mongo",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const ExpressPlaylist = new Data({
      name: "Express JS",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const AngularPlaylist = new Data({
      name: "Angular JS",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const djangoPlaylist = new Data({
      name: "Django",
      ctype: "Backend",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const mongooesPlaylist = new Data({
      name: "mongooes JS",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const javascript = new Data({
      name: "Javascript",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const uiux = new Data({
      name: "uiux",
      ctype: "Design",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const phpPlaylist = new Data({
      name: "Php",
      ctype: "Backend",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const flutterPlaylist = new Data({
      name: "Flutter",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const react_nativePlaylist = new Data({
      name: "React Native",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const ionicPlaylist = new Data({
      name: "Ionic",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const swiftPlaylist = new Data({
      name: "Swift",
      ctype: "IOS Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const androidPlaylist = new Data({
      name: "Android",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const kotlinPlaylist = new Data({
      name: "Kotlin",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const mysqlPlaylist = new Data({
      name: "Mysql",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const result = await Data.insertMany([
      MongoPlaylist,
      uiux,
      javascript,
      mongooesPlaylist,
      djangoPlaylist,
      AngularPlaylist,
      ExpressPlaylist,
      phpPlaylist,
      flutterPlaylist,
      androidPlaylist,
      ionicPlaylist,
      mysqlPlaylist,
      kotlinPlaylist,
      swiftPlaylist,
      react_nativePlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
insertMultipleDocuments();

const readData = async () => {
  const result = await Data.find({ ctype: "FrontEnd" }, { _id: 0 }).skip(1);
  console.log(result);
};

// readData();

const comparisionOperator = async () => {
  const result = await Data.find({ ctype: { $in: ["FrontEnd", "BackEnd"] } });
  console.log(result);
};

// comparisionOperator();
