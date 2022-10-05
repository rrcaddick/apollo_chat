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

const hashPassword = async (password) => {
  const saltRounds = Number(process.env.HASH_SALT_ROUNDS);
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  user.password = await hashPassword(user.password);

  if (user.status === undefined) user.status = "Available";
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const user = this;
  if (!user._update.password) return next();
  const hash = await hashPassword(user._update.password);
  user._update.password = hash;
  next();
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
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
