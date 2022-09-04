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
    console.log(`New mutation`.bgRed.white);
    const user = await User.findById(userId).select("-password");

    if (user) {
      req.user = user;
    }

    return next();
  } catch (error) {
    // TODO: Add refresh token logic
    //attemptRefresh(refreshToken);
    return next();
  }
});

const attemptRefresh = async (refreshToken) => {
  const user = await User.findOne({ refreshToken });
  const { userId } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  if (user._id === userId) {
    const refreshToken = await generateRefreshToken(user);
  }
};

module.exports = {
  authenticate,
};
