const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authentication = async (req, res, next) => {
  console.log(req.cookies);
  try {
    //   getting the token
    const token = req.cookies.credentials;
    // verifying the token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized : No Token provided");
    console.log(err);
  }
};

module.exports = Authentication;
