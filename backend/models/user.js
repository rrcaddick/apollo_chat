const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

userSchema.pre("save", async function (next) {
  const user = this;
  const saltRounds = Number(process.env.HASH_SALT_ROUNDS);
  const plainPassword = String(user.password);

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(plainPassword, salt);
  user.password = hash;

  if (user.status === undefined) user.status = "Available";

  next();
});

module.exports = mongoose.model("User", userSchema);
