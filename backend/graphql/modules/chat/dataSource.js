const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getUserChats(userId) {
    return await this.model.find({ members: userId });
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

  async addChat(input) {
    return await this.model.create({ ...input });
  }

  async removeChat(chatId) {
    const chat = await this.model.findByIdAndDelete(chatId);
    return chat;
  }
}

module.exports = Chat;
