const { AuthenticationError } = require("apollo-server-express");

const authGaurd = ({ root, args, context: { user }, info }, next) => {
  if (!user) throw new AuthenticationError("Invalid token");
  return next();
};

module.exports = {
  authGaurd,
};
