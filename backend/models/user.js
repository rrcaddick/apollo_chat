const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
      unique: "Email already exists",
    },
    password: {
      type: String,
      required: "Password is required",
    },
    profilePicture: String,
    status: String,
    refreshToken: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
