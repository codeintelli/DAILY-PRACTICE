const axios = require("axios");
exports.homeRoutes = (req, res) => {
  // make a get request to api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userData) {
      console.log(userData.data);
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
