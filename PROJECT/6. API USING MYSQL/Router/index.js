const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.json({ success: 1, message: "rest api working" });
});

module.exports = router;
