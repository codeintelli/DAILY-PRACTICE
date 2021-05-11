const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
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
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
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
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [{ token: { type: String, required: true } }],
});

userSchema.pre("save", async function (next) {
  console.log("this function is been executed");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let generatedtoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: generatedtoken });
    await this.save();
    return generatedtoken;
  } catch (err) {
    console.log(err);
  }
};

// store message Data
userSchema.methods.addMessage = async function (
  namevalue,
  email,
  phone,
  message
) {
  try {
    this.messages = this.messages.concat({
      name: namevalue,
      email,
      phone,
      message,
    });
    await this.save();
    return this.message;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
