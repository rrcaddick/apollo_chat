const { MongoDataSource } = require("apollo-datasource-mongodb");
const { destroyImage } = require("../../../utils/cloudinary");

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

  async updateUser(user, input) {
    const currentProfilePicture = user.profilePicture;
    const updatedUser = await this.model.findByIdAndUpdate(user._id, { ...input }, { new: true });
    await destroyImage(currentProfilePicture);
    return updatedUser;
  }
}

module.exports = User;
