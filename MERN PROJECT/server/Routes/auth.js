const express = require("express");
const router = express.Router();

const User = require("../model/userSchema");
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
