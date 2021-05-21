import express from "express";
const app = express();
import { APP_PORT, MONGO_CONNECTION_URL } from "./config";
import mongoose from "mongoose";
import Routes from "./routes";
import errorHandler from "./middleware/errorHandler";
import path from "path";
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB CONNECTED");
});

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", Routes);
app.use("/uploads", express.static("uploads"));

global.appRoot = path.resolve(__dirname);

app.use(errorHandler);
app.listen(APP_PORT, () => {
  console.log(`listening on the port http://localhost:${APP_PORT}`);
});
