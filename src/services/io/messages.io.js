import messageDao from "../../dao/message.dao.js";

export default class IoMessages {
  static ioMessages(io, socketClient) {
    socketClient.on("messages", async (userMessage) => {
      await messageDao.create(userMessage);
      const messageList = await messageDao.getAll();
      io.emit("get-messages", messageList);
    });
  }
}
