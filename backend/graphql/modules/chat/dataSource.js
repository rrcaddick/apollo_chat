const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getUserChats(userId) {
    const chats = await this.model
      .find({
        $or: [
          { $and: [{ chatType: { $ne: "BROADCAST" } }, { members: userId }] },
          { $and: [{ chatType: { $eq: "BROADCAST" } }, { admins: userId }] },
          { $and: [{ chatType: { $eq: "GROUP" } }, { $or: [{ members: userId }, { admins: userId }] }] },
        ],
        deletedBy: { $ne: userId },
      })
      .populate("members admins latestMessage");
    return chats;
  }

  async getChat(chatId) {
    return await this.model.findById(chatId).populate("members admins");
  }

  async getOrCreateChat(members) {
    let chat = await this.model.findOne({ members: { $all: members }, chatType: "DIRECT" });
    if (!chat) {
      chat = await this.model.create({ members });
    }
    return chat;
  }

  async getChatDetails(chat, userId) {
    const { chatType, name, icon, members } = chat;
    if (chatType !== "DIRECT") {
      return { name: name, profilePicture: icon };
    }
    return members.find((m) => !m._id.equals(userId));
  }

  async addChat(input, userId) {
    const { _id } = (await this.model.exists({ members: input.members })) || {};
    const isDirect = input?.chatType === "DIRECT" || !input?.chatType;
    if (isDirect && _id) {
      return await this.model
        .findByIdAndUpdate(_id, { $pull: { deletedBy: userId } }, { new: true })
        .populate("members admins");
    }
    try {
      const chat = await this.model.create({ ...input });
      return await chat.populate("members admins");
    } catch (error) {
      console.log(error);
    }
  }

  async removeChat(chatId, userId) {
    const chat = await this.model.findByIdAndUpdate(
      { _id: chatId },
      { $push: { deletedBy: userId } },
      { new: true, updateMessageDeletedBy: true, chatId, userId }
    );
    return chat;
  }

  async resetUnreadCount(chatId, userId) {
    const chat = await this.findOneById(chatId);
    ``;
    chat.set(
      "unreadCount",
      chat.members.reduce((obj, member) => {
        if (member.toString() === userId) return { ...obj, [member]: 0 };
        return { ...obj, [member]: chat.unreadCount[member] };
      }, {})
    );
    chat.markModified("unreadCount");
    await chat.save();
    return chat;
  }
}

module.exports = Chat;
