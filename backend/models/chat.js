const mongoose = require("mongoose");
const { Schema } = mongoose;

const unreadCountSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "Chat members are required",
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const chatSchema = new Schema(
  {
    chatType: {
      type: String,
      enum: ["DIRECT", "GROUP", "BROADCAST"],
      default: "DIRECT",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Chat members are required",
      },
    ],
    deletedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Chat members are required",
      },
    ],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    name: String,
    icon: String,
    admins: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: undefined,
    },
    unreadCount: {},
  },
  { timestamps: true }
);

chatSchema.pre("save", function (next) {
  const { chatType, icon, isNew } = this;
  if (!isNew) return next();

  this.unreadCount = this.members.reduce((obj, member) => {
    return { ...obj, [member._id.toString()]: 0 };
  }, {});

  if (chatType === "BROADCAST") this.icon = "ApolloChat/ykoxzcf9rpbdtcftc1ih";
  if (chatType === "GROUP" && !icon) this.icon = "ApolloChat/ihp9rlm2q7stn1hytb1f";
  next();
});

chatSchema.post("findOneAndUpdate", async function () {
  const Message = mongoose.model("Message");
  const { updateMessageDeletedBy, chatId, userId } = this?.options;
  if (updateMessageDeletedBy) await Message.updateMany({ chat: chatId }, { $push: { deletedBy: userId } });
});

module.exports = mongoose.model("Chat", chatSchema);
