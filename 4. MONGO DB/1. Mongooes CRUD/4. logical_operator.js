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

const logicalOperator = async () => {
  const logicalAnd = await collection_name
    .find({
      $and: [{ ctype: "Database" }, { author: "ITVMH DEVELOPERS" }],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalOr = await collection_name
    .find({
      $or: [{ ctype: "Database" }, { ctype: "FrontEnd" }, { ctype: "Backend" }],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalNot = await collection_name
    .find({
      videos: { $not: { $gt: 32 } },
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  const logicalNor = await collection_name
    .find({
      $nor: [
        { ctype: "Database" },
        { ctype: "FrontEnd" },
        { ctype: "Backend" },
      ],
    })
    .select({ name: 1, _id: 0, ctype: 1 });

  console.log("\n\n\n\n\n\n Logical And:-", logicalAnd);
  console.log("\n\n\n\n\n\n Logical OR:-", logicalOr);
  console.log("\n\n\n\n\n\n logical Not:-", logicalNot);
  console.log("\n\n\n\n\n\n logical  NOR:-", logicalNor);
};
logicalOperator();
