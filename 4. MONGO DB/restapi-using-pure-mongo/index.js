import express from "express";
import { APP_PORT } from "./config";
import errorHandler from "./middlewares/errorHandler";
const app = express();

import Router from "./routes";

app.use(express.json());
app.use("/api", Router);
app.use(errorHandler);
http: app.listen(APP_PORT, () => {
  console.log(`http://localhost:${APP_PORT}`);
  //   console.log("hello world");
});
