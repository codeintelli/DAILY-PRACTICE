const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/index");

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
      return res.status(422).json({ error: "Please Filled the Data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const passwordVerify = await bcrypt.compare(password, userLogin.password);
      let token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("credentials", token, {
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

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// get data for home and contact page
router.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      res.status(422).json({ error: "Please Fill Data Properly" });
    }

    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
    }
    await userContact.save();
    res.status(201).json({ message: "user contact successfully" });
  } catch (err) {
    console.log(err);
  }
});

// logout route
router.get("/logout", authenticate, (req, res) => {
  res.clearCookie("credentials", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
