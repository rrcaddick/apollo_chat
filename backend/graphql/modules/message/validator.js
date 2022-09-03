const yup = require("yup");
const Chat = require("../../../models/chat");

const messageSchema = yup.object().shape({
  chatId: yup.string().test("valid-chat", "Invalid chat", async function (chatId) {
    return Boolean(await Chat.exists({ _id: chatId }));
  }),
});

module.exports = {
  messageSchema,
};
