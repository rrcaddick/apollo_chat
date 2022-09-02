const asyncHandler = require("express-async-handler");

const loginController = asyncHandler(async (req, res, next) => {
  res.send("login");
});

module.exports = {
  loginController,
};
