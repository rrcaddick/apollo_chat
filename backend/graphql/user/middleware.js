const { validate } = require("../middleware/validate");
const { userSchema } = require("./validator");

const middlewares = {
  Mutation: {
    registerUser: [validate(userSchema)],
  },
};

module.exports = {
  middlewares,
};
