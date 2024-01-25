import messageModel from "./models/message.model.js";

export default class MessageDao {

  static getAll () {
    return messageModel.find();
  }

  static create (message) {
    return messageModel.create(message);
  }
}
