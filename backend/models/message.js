const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    deletedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Chat members are required",
      },
    ],
  },
  { timestamps: true }
);

messageSchema.index({ createdAt: 1 });

messageSchema.post("save", async function (message, next) {
  const Chat = mongoose.model("Chat");
  await Chat.findByIdAndUpdate(message.chat, { latestMessage: message, deletedBy: [] });
  next();
});

messageSchema.post("updateMany", async function () {
  const { clearLatestMessage, chatId } = this?.options;
  if (clearLatestMessage) {
    const Chat = mongoose.model("Chat");
    await Chat.findByIdAndUpdate(chatId, { latestMessage: undefined });
  }
});

module.exports = mongoose.model("Message", messageSchema);
