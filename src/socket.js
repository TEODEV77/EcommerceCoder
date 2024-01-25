import { Server } from "socket.io";
import MessageDao from "./dao/message.dao.js";
import IoMessages from "./services/io/messages.io.js";

import productsService from './services/products.service.js'

let io;


export const ioServer = (httpSever) => {
  io = new Server(httpSever);

  io.on("connection", async (socketClient) => {

    const messageList = await MessageDao.getAll();
    io.emit("get-messages", messageList);
    IoMessages.ioMessages(io,socketClient);

    const products = await productsService.getAll({},{});
    io.emit('get-products', products);

    

  });
};
