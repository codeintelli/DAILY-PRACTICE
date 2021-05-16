var UserDb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validating error
  if (!req.body) {
    res
      .status(422)
      .json({ message: "validation error:please enter all required fields" });
  }

  //new user registration
  const user = new UserDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //   save user into database
  user
    .save(user)
    .then((data) => {
      //   res.json(data);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message ||
          "Some Error Occured while creating a create operation ",
      });
    });
};

// retrive and return all users / retrive and return a single users
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserDb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: `No Found User with id ${id}` });
        } else {
          res.json(data);
        }
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message ||
            "Some Error Occured while Reading the Data operation ",
        });
      });
  } else {
    UserDb.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message ||
            "Some Error Occured while Reading the Data operation ",
        });
      });
  }
};

// update a new user identifier by user id
exports.update = (req, res) => {
  if (!req.body) {
    res
      .status(422)
      .json({ message: "validation error:please enter all required fields" });
  }
  const id = req.params.id;
  UserDb.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Cannot Update user with ${id} Maybe user Not Found`,
        });
      } else {
        res.json(data);
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `Error Update User Information` });
    });
};

// Delete a user by its id
exports.delete = (req, res) => {
  if (!req.body) {
    res.status(422).json({
      message: "validation error:please enter all required fields",
    });
  }
  const id = req.params.id;
  UserDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({ message: `Cannot Delete with id ${id} Maybe id is wrong` });
      } else {
        res.json({
          message: "User was deleted Successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `could not delete User with id= ${id}` });
    });
};
