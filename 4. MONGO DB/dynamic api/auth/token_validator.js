const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, "mynameis@shiva@iamamerndeveloper", (err, decode) => {
        if (err) {
          return res.json({
            success: 0,
            message: "invalid token",
          });
        } else {
          req.decode = decode;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User",
      });
    }
  },
};
