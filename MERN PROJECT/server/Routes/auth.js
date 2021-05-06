const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const middleware = (req, res, next) => {
  console.log(`hello middleware`);
  next();
};
router.get("/", (req, res) => {
  res.send("hello from the server");
});
// router.post("/register", (req, res) => {
//   console.log(req.body);
//   res.json({ message: req.body });
//   console.log(req.body.email);
// });
/* 
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !cpassword || !password) {
    return res.status(422).json({ error: "please enter the field properly" });
  } else {
    User.findOne({ email: email })
      .then((userExists) => {
        if (userExists) {
          return res.status(422).json({ error: "Email already Exists" });
        }
        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });
        user
          .save()
          .then(() => {
            res.status(201).json({ message: "user register successfully" });
          })
          .catch((err) => {
            res.status(500).json({ message: "Failed to register" });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}); */

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !cpassword || !password) {
    return res.status(422).json({ error: "please enter the field properly" });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email already Exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      const userRegistered = await user.save();
      if (userRegistered) {
        res.status(201).json({ message: "user register successfully" });
      } else {
        res.status(500).json({ message: "Failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: "Please Filled the Data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const passwordVerify = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("login-credentials", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!passwordVerify) {
        res.status(422).json({ error: "Invalid Credential" });
      } else {
        res.status(200).json({ message: "User Sign In successfully" });
      }
    } else {
      res.status(422).json({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", middleware, (req, res) => {
  console.log(`hello my about`);
  res.send("hello from the server");
});
router.get("/contact", (req, res) => {
  res.send("hello from the server");
});
router.get("/singnin", (req, res) => {
  res.send("hello from the server");
});
router.get("/signup", (req, res) => {
  res.send("hello from the server");
});

module.exports = router;
