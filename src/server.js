import http from "http";

import app from "./express.js";
import { ioServer } from "./socket.js";
import { flags } from "./utils.js";
import Messages from "./utils/messages.js";
import MongoSingleton from "./database/mongoSingleton.js";
import SingletonEnvironment from "./env/singletonEnvironment.js";

console.log(flags);

Messages.initMessages(flags);

const persistence = flags.p;
const env = flags.environ;
if (persistence === "MONGO") {
  await MongoSingleton.getInstance();
}

const { environment } = SingletonEnvironment.getInstance(env);
const { host, port } = environment.env.api;

const server = http.createServer(app);
ioServer(server);

server.listen(port, () => {
  Messages.serverRunning(host,port);
});
