const asyncHandler = require("express-async-handler");

const signupController = asyncHandler(async (req, res, next) => {});

const loginController = asyncHandler(async (req, res, next) => {});

module.exports = {
  signupController,
  loginController,
};
