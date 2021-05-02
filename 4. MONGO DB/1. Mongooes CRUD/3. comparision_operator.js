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

// *schema

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

// todo:create collection
const collection_name = new mongo.model("mongoData", dataSchema);

const comparisionOperator = async () => {
  const equaloperator = await collection_name
    .find({
      videos: { $eq: 100 },
    })
    .select({ name: 1, videos: 1 });
  const greateroperator = await collection_name
    .find({
      videos: { $gt: 50 },
    })
    .select({ name: 1, videos: 1 });
  const greaterEqualOperator = await collection_name
    .find({
      videos: { $gte: 100 },
    })
    .select({ name: 1, videos: 1 });
  const lessoperator = await collection_name
    .find({
      videos: { $lt: 10 },
    })
    .select({ name: 1, videos: 1 });
  const lessEqualOperator = await collection_name
    .find({
      videos: { $lte: 10 },
    })
    .select({ name: 1, videos: 1 });
  const notEqualOperator = await collection_name
    .find({
      videos: { $ne: 100 },
    })
    .select({ name: 1, videos: 1 });
  const notInArray = await collection_name
    .find({
      ctype: {
        $nin: [
          "FrontEnd",
          "Database",
          "Backend",
          "Native Mobile Development",
          "Android Mobile Development",
        ],
      },
    })
    .select({ name: 1, ctype: 1 });
  const inArray = await collection_name
    .find({
      ctype: {
        $in: ["FrontEnd", "Backend"],
      },
    })
    .select({ name: 1, ctype: 1, _id: 0 });
  console.log("\n\n\n\n\nequaloperator\n", equaloperator);
  console.log("\n\n\n\n greateroperator \n", greateroperator);
  console.log("\n\n\n\n greaterEqualOperator \n", greaterEqualOperator);
  console.log("\n\n\n\n lessoperator \n", lessoperator);
  console.log("\n\n\n\n lessEqualOperator \n", lessEqualOperator);
  console.log("\n\n\n\n notEqualOperator \n", notEqualOperator);
  console.log("\n\n\n\n notInArray \n", notInArray);
  console.log("\n\n\n\n inArray \n", inArray);
};
comparisionOperator();
