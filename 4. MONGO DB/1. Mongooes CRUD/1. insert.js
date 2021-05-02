const mongo = require("mongoose");
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

// todo: Create Document and Insert Data

const insertData = async () => {
  try {
    // ~ define record that we will insert
    const reactPlaylist = new collection_name({
      name: "React JS",
      ctype: "Front End",
      videos: 10,
      author: "ITVMH DEVELOPER",
      active: true,
    });
    // ~ now save this record we want to add
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

const insertMultipleData = async () => {
  try {
    const MongoPlaylist = new collection_name({
      name: "Mongo",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const ExpressPlaylist = new collection_name({
      name: "Express JS",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const AngularPlaylist = new collection_name({
      name: "Angular JS",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const djangoPlaylist = new collection_name({
      name: "Django",
      ctype: "Backend",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const mongooesPlaylist = new collection_name({
      name: "mongooes JS",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const javascript = new collection_name({
      name: "Javascript",
      ctype: "FrontEnd",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const uiux = new collection_name({
      name: "uiux",
      ctype: "Design",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const phpPlaylist = new collection_name({
      name: "Php",
      ctype: "Backend",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const flutterPlaylist = new collection_name({
      name: "Flutter",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const react_nativePlaylist = new collection_name({
      name: "React Native",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const ionicPlaylist = new collection_name({
      name: "Ionic",
      ctype: "Native Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const swiftPlaylist = new collection_name({
      name: "Swift",
      ctype: "IOS Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const androidPlaylist = new collection_name({
      name: "Android",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const kotlinPlaylist = new collection_name({
      name: "Kotlin",
      ctype: "Android Mobile Development",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const mysqlPlaylist = new collection_name({
      name: "Mysql",
      ctype: "Database",
      videos: 10,
      author: "ITVMH DEVELOPERS",
      active: true,
    });

    const result = await collection_name.insertMany([
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
  } catch (e) {
    console.error(e);
  }
};
insertMultipleData();
insertData();
