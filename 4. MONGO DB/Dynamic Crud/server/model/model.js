const mongoose = require("mongoose");
var modelStructure = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email must be unique"],
  },
  gender: String,
  status: String,
});

var UserDb = new mongoose.model("userCollection", modelStructure);

module.exports = UserDb;
