const mongoose = require("mongoose");
const { Schema } = mongoose;
const Chat = require("./chat");

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "Sender is required when creating a message",
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: "Chat is required when creating a message",
    },
    content: {
      type: String,
      required: "Content is required when creating a message",
    },
  },
  { timestamps: true }
);

messageSchema.index({ createdAt: 1 });

messageSchema.post("save", async function (message, next) {
  await Chat.findByIdAndUpdate(message.chat, { latestMessage: message });
  next();
});

messageSchema.post("deleteMany", async function () {
  const chatId = this?._conditions?.chat;
  if (!chatId) return;
  await Chat.findByIdAndUpdate(chatId, { latestMessage: undefined });
});

module.exports = mongoose.model("Message", messageSchema);
