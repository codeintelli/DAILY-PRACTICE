const { create } = require("./user.service");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database COnnection error",
        });
      } else {
      }
    });
  },
};
