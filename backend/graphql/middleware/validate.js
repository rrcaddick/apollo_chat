const { UserInputError } = require("apollo-server-express");
const { formatYupError } = require("../../utils/formatYupError");

const validate =
  (schema) =>
  async ({ root, args, context, info }, next) => {
    let validationObject = args;

    if (typeof args[Object.keys(args)[0] === "object"]) {
      validationObject = args[Object.keys(args)[0]];
    }

    try {
      await schema.validate(validationObject, { abortEarly: false });
      return next();
    } catch (error) {
      throw new UserInputError("Validation Failed", { data: formatYupError(error) });
    }
  };

module.exports = {
  validate,
};
