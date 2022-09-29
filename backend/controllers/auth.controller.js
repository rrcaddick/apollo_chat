const asyncHandler = require("express-async-handler");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");
const { refreshCookieOptions } = require("../config/refreshCookieOptions");

const loginController = asyncHandler(async (req, res, next) => {
  const { user } = req;
  try {
    const refreshToken = await generateRefreshToken(user);
    res
      .status(200)
      .clearCookie("refreshToken", refreshCookieOptions)
      .cookie("refreshToken", refreshToken, refreshCookieOptions)
      .json({
        token: generateAccessToken(user._id),
      });
  } catch (error) {
    res.status(403);
    throw new Error("Unable to generate refresh token");
  }
});

const logoutController = (req, res) => {
  res.status(200).clearCookie("refreshToken", refreshCookieOptions).json({
    message: "Succesfully logged out",
  });
};

module.exports = {
  loginController,
  logoutController,
};
