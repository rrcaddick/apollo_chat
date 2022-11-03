const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getUserChats(userId) {
    return await this.model.find({
      $or: [
        { $and: [{ chatType: { $ne: "BROADCAST" } }, { members: userId }] },
        { $and: [{ chatType: { $eq: "BROADCAST" } }, { admins: userId }] },
      ],
      deletedBy: { $ne: userId },
    });
  }

  async getChat(chatId) {
    return await this.findOneById(chatId);
  }

  async getOrCreateChat(members) {
    let chat = await this.model.findOne({ members: { $all: members }, chatType: "DIRECT" });
    if (!chat) {
      chat = await this.model.create({ members });
    }
    return chat;
  }

  async getChatDetails(chat, userId) {
    const { chatType, name, icon } = chat;
    if (chatType !== "DIRECT") {
      return { name: name, profilePicture: icon };
    }
    const { members } = await chat.populate("members");
    return members.find((m) => !m._id.equals(userId));
  }

  async addChat(input, userId) {
    const { _id } = (await this.model.exists({ members: input.members })) || {};
    if (input?.chatType === "DIRECT" && _id) {
      return await this.model.findByIdAndUpdate(_id, { $pull: { deletedBy: userId } }, { new: true });
    }
    return await this.model.create({ ...input });
  }

  async removeChat(chatId, userId) {
    const chat = await this.model.findByIdAndUpdate(
      { _id: chatId },
      { $push: { deletedBy: userId } },
      { new: true, updateMessageDeletedBy: true, chatId, userId }
    );
    return chat;
  }
}

module.exports = Chat;
