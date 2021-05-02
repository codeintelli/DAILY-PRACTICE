const express = require("express");
const router = new express.Router();
const MensRanking = require("../model/mens");

// insert data into database
router.post("/mens", async (req, res) => {
  try {
    const user = new MensRanking(req.body);
    console.log(user);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

// read all user data from database
router.get("/mens", async (req, res) => {
  try {
    const ReadData = await MensRanking.find({});
    res.status(201).send(ReadData);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

// update data of all user from database
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updateData);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

// delete record from database
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteData = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(deleteData);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

module.exports = router;
