const mongoose = require("mongoose");
require("../db/conn");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dbSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      generatedtoken: {
        type: String,
        required: true,
      },
    },
  ],
});

dbSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      "mynameisshivaiamdeveloper"
    );
    this.tokens = this.tokens.concat({ generatedtoken: token });
    await this.save();
    console.log("your generate token is :- \n\n\n\n", token);

    return token;
  } catch (error) {
    console.log(error);
  }
};

dbSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.password = await bcrypt.hash(this.confirm_password, 10);

    // this.confirm_password = undefined;
  }
  next();
});

// creating collection
const Registration = new mongoose.model("user-data", dbSchema);
module.exports = Registration;
