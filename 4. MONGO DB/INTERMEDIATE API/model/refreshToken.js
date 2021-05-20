import mongoose from "mongoose";

const Schema = mongoose.Schema;

// database level validation
const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      unique: true,
    },
  },
  { timestamps: false } 
);

export default mongoose.model("refresh-token", refreshTokenSchema);
