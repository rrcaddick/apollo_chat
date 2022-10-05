const { MongoDataSource } = require("apollo-datasource-mongodb");

class User extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getOnlineFriends(userId) {
    return await this.model.find({ _id: { $ne: userId } });
  }

  async getUsersByIds(userIds) {
    return await this.findManyByIds(userIds);
  }

  async getUser(userId) {
    return await this.findOneById(userId);
  }

  async registerUser(input) {
    return await this.model.create({ ...input });
  }

  async updateUser(userId, input) {
    return await this.model.findByIdAndUpdate(userId, { ...input }, { new: true });
  }
}

module.exports = User;
