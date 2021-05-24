const {
  save,
  find,
  findByEmail,
  findById,
  findByIdAndDelete,
  findByIdAndUpdate,
} = require("./user.service");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
    save(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: `database is not connected`,
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

  login: (req, res) => {
    console.log(req.body);
    let body = req.body;
    let email = req.body.email;
    findByEmail(email, (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      if (!result) {
        res.status(422).json({
          success: 0,
          data: "invalid email or password ",
        });
      }
      const isMatch = bcrypt.compareSync(req.body.password, result.password);
      if (isMatch) {
        result.password = undefined;
        const token = jwt.sign(
          { isMatch: result },
          "mynameis@shiva@iamamerndeveloper",
          { expiresIn: "1h" }
        );
        return res.status(200).json({
          success: 1,
          message: "login Successfully",
          token: token,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email wwwwor password",
        });
      }
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    console.log(id);
    findById(id, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!result) {
        return res.status(404).json({
          success: 0,
          message: "Record Not Found",
        });
      }
      result.password = undefined;
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

  getUsers: (req, res) => {
    find((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },

  updateUser: (req, res) => {
    const body = req.body;
    body.password = bcrypt.hashSync(body.password, 10);
    findByIdAndUpdate(body, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },

  deleteUser: (req, res) => {
    const data = req.body;
    findByIdAndDelete(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(results);
      // if (!results) {
      //   return res.json({
      //     success: 0,
      //     message: "Record Not Found",
      //   });
      // }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
};
