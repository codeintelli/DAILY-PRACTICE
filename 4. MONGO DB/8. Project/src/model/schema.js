const mongoose = require("mongoose");
const connection = require("../db/connection");
const validator = require("validator");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    min: 3,
  },
});

// create Collection instance
const UserData = mongoose.model("User", userSchema);

module.exports = UserData;
