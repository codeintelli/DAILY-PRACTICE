const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const createToken = async () => {
  const token = await jwt.sign(
    { _id: "606a8f9ce1feb93310e42aa8" },
    "mynameisdushyantkhodaandiamdeveloperofitvmh"
  );
  const forexpire = await jwt.sign(
    { _id: "606a8f9ce1feb93310e42aa8" },
    "mynameisdushyantkhodaandiamdeveloperofitvmh",
    { expiresIn: "2 minutes" }
  );
  // first will be your header before dot second will be your payload means your data and third will be your verify signature token

  // [ + ] sign = signature and verify is used for verify identity
  console.log("TOken \n\n", token);

  const verifyToken = await jwt.verify(
    token,
    "mynameisdushyantkhodaandiamdeveloperofitvmh"
  );
  console.log("verify \n\n", verifyToken);
};
createToken();
