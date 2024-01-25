import { messageRepository } from "../repositories/index.js";

export default class MessagesService {
  static getAll() {
    return messageRepository.dao.getAll();
  }
}

