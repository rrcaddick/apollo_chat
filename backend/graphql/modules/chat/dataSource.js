const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getChats() {
    return await this.model.find();
  }

  async getChat(chatId) {
    return await this.findOneById(chatId);
  }

  async getChatDetails(chat, userId) {
    const { members, latestMessage, createdAt } = await chat.populate("members latestMessage");
    const { name, profilePicture } = members.find((m) => !m._id.equals(userId));
    const time = latestMessage ? latestMessage.createdAt : createdAt;
    return { name, profilePicture, time };
  }

  async addChat(members) {
    return await this.model.create({ members });
  }
}

module.exports = Chat;
