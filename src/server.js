import http from "http";

import app from "./express.js";
import { ioServer } from "./socket.js";
import { flags } from "./utils.js";
import Messages from "./utils/messages.js";
import { envFactory } from "./env/index.js";
import MongoSingleton from "./database/mongoSingleton.js";


Messages.initMessages(flags);

const mode = flags.p;
const env = flags.e;
if (mode === "MONGO") {
  await MongoSingleton.getInstance();
}

const { envi } = envFactory(env);
const { host, port } = envi.api;

const server = http.createServer(app);
ioServer(server);

server.listen(port, () => {
  Messages.serverRunning(host,port);
});
