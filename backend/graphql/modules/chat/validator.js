const yup = require("yup");
const User = require("../../../models/user");

const chatSchema = yup.object().shape({
  members: yup.array().test("valid-users", "Invalid users in chat", async function (members) {
    let validUsers = true;

    for (const member of members) {
      validUsers = Boolean(await User.exists({ _id: member }));
    }

    return validUsers;
  }),
});

module.exports = {
  chatSchema,
};
