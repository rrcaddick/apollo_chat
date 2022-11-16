const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = asyncHandler(async (req, res, next) => {
  const {
    cookies: { refreshToken },
  } = req;

  const token =
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ") &&
    req.headers.authorization.split(" ")[1];

  if (!token && !refreshToken) return next();

  try {
    const { userId } = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(userId);

    if (user) {
      req.user = user;
    }

    return next();
  } catch (error) {
    return next();
  }
});

const validateRefreshToken = asyncHandler(async (req, res, next) => {
  const {
    cookies: { refreshToken },
  } = req;

  const user = await User.findOne({ refreshToken });

  if (!user) {
    res.status(403);
    throw new Error("Invalid token");
  }

  try {
    const { userId } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    if (user._id.toString() === userId) {
      req.user = user;
    }

    return next();
  } catch (error) {
    res.status(403);
    throw new Error("Invalid token");
  }
});

module.exports = {
  authenticate,
  validateRefreshToken,
};
