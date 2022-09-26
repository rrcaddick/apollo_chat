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
    mobile: {
      type: String,
      required: "Mobile number is required",
      unique: "Mobile number already exists",
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

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.rotateRefreshToken = async function (refreshToken) {
  this.refreshToken = refreshToken;
  await this.save();
};

userSchema.methods.clearRefreshToken = async function () {
  this.refreshToken = undefined;
  await this.save();
};

userSchema.statics.revokeRefreshToken = async function (userId) {
  const user = await this.findById(userId);
  await user.clearRefreshToken();
};

module.exports = mongoose.model("User", userSchema);
