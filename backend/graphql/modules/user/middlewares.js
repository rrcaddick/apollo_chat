const { authGaurd } = require("../../middleware/authGaurd");
const { validate } = require("../../middleware/validate");
const { userSchema } = require("./validator");

const middlewares = {
  Query: {
    "*": [authGaurd],
  },
  Mutation: {
    registerUser: [validate(userSchema)],
  },
};

module.exports = {
  middlewares,
};
