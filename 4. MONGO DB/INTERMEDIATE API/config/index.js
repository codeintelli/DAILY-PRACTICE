require("dotenv").config({ path: "./config.env" });

export const {
  APP_PORT,
  DEBUG_MODE,
  MONGO_CONNECTION_URL,
  JWT_SECRET,
  REFRESH_SECRET,
  APP_URL,
} = process.env;
