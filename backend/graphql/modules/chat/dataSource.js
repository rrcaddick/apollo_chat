const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getUserChats(userId) {
    return await this.model.find({
      members: userId,
      deletedBy: { $ne: userId },
      $or: [{ chatType: { $ne: "BROADCAST" } }, { admins: userId }],
    });
  }

  async getChat(chatId) {
    return await this.findOneById(chatId);
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
    if (_id) {
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
