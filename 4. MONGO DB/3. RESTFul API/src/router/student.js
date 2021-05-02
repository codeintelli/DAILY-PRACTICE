const express = require("express");
const router = new express.Router();
const Student = require("../model/student");
require("../db/conn");

router.get("/", (req, res) => {
  res.send("<h1>Hello From User Side</h1>");
});

router.post("/student", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(404).send(e);
      console.log(e);
    });
});

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/students", async (req, res) => {
  try {
    const readUser = await Student.find();
    res.status(201).send(readUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    // const _id = req.params;
    // console.log(req.params.id);

    const _id = req.params.id;
    const getDataID = await Student.findById(_id);

    if (!getDataID) {
      res.status(404).send("no record found");
    } else {
      res.send(getDataID);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteData = await Student.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(404).send();
    } else {
      res.send(deleteData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
