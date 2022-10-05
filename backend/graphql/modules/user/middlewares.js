const { authGaurd } = require("../../middleware/authGaurd");
const { validate } = require("../../middleware/validate");
const { registerUserSchema, updateUserSchema, updateProfileSchema } = require("./validator");

const middlewares = {
  Query: {
    "*": [authGaurd],
  },
  Mutation: {
    registerUser: [validate(registerUserSchema)],
    updateUser: [authGaurd, validate(updateUserSchema)],
    updateProfile: [authGaurd, validate(updateProfileSchema)],
  },
};

module.exports = {
  middlewares,
};
