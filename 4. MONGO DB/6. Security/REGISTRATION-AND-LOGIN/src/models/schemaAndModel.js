const mongoose = require("mongoose");
require("../db/conn");
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
});

dbSchema.pre("save", async function (next) {
  console.log("shiva mahadev");
  if (this.isModified("password")) {
    console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password is ${this.password}`);
    this.confirm_password = undefined;
  }
  next();
});

// dbSchema.post("save", async function (next) {
//   console.log("post method use");
//   next();
// });

// creating collection
const Registration = new mongoose.model("user-data", dbSchema);
module.exports = Registration;
