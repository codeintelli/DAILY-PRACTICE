const mongoose = require("mongoose");
require("../db/conn");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Please Enter Valid Name"],
    required: true,
  },
  phone: {
    type: Number,
    minlength: [10, "Please Enter Valid Number"],

    required: true,
    unique: [true, "enter valid number this no is registed before"],
  },
  email: {
    type: String,
    minlength: 3,
    unique: [true, "Email id is already Present"],
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please Enter Valid Email Address");
      }
    },
  },
  address: {
    type: String,
  },
});

// creating collection or model
const Student = mongoose.model("data", studentSchema);
module.exports = Student;
