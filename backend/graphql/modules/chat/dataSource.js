const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getUserChats(userId) {
    return await this.model.find({ members: userId });
  }

  async getChat(chatId) {
    return await this.findOneById(chatId);
  }

  async getChatDetails(chat, userId) {
    const { members, latestMessage, createdAt } = await chat.populate("members latestMessage");
    const { name, profilePicture, mobile } = members.find((m) => !m._id.equals(userId));
    const time = latestMessage ? latestMessage.createdAt : createdAt;
    return { name, profilePicture, time, mobile };
  }

  async addChat(members) {
    return await this.model.create({ members });
  }
}

module.exports = Chat;
