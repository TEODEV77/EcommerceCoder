import { Server } from "socket.io";

let io;

export const ioServer = (httpSever) => {
  io = new Server(httpSever);

  io.on("connection", async (socketClient) => {
    
    events = await eventSchema.find({});

    socketClient.on("new-event", async (newEvent) => {
      console.log(newEvent);
      io.emit("get-events", newEvent);
    });

    io.emit("get-events", events);
  });
};
