import messageDao from "../dao/message.dao.js";

export default class MessagesService {
  static getAll() {
    return messageDao.getAll();
  }
}
