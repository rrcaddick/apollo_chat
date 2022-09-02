const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  const accessSecret = process.env.JWT_ACCESS_SECRET;
  const accessExpiry = process.env.JWT_ACCESS_EXPIRY;
  return jwt.sign({ userId }, accessSecret, { expiresIn: accessExpiry });
};

const generateRefreshToken = async (user) => {
  const refreshSecret = process.env.JWT_REFRESH_SECRET;
  const refreshExpiry = process.env.JWT_REFRESH_EXPIRY;

  const newRefreshToken = jwt.sign({ userId: user._id }, refreshSecret, { expiresIn: refreshExpiry });
  await user.rotateRefreshToken(newRefreshToken);

  return newRefreshToken;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
