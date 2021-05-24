//MTg2ZjM0NTk2ZWMzZjJmMDcyMjA3MTZjYjNjN2I3MmQ=
const express = require("express");
const app = express();
const fast2sms = require("fast-two-sms");
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/sendMessage", async (req, res) => {
  try {
    console.log(req.body);
    const response = await fast2sms.sendMessage({
      authorization: `wRVgP0EIAtZjNy67oe43qhLazJKfxb2BY91C8OciunHGFvUXMDKGpPibhVMQe4u7HanErTWtc8AUgjo2`,
      message: req.body.message,
      numbers: [req.body.number],
    });
    console.log(response);
    if (response.return == true) {
      res.status(200).json({ success: 1 });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
