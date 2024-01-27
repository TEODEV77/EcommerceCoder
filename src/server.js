import http from "http";
import app from "./express.js";
import { ioServer } from "./socket.js";
import { flags } from "./utils.js";
import Messages from "./utils/messages.js";
import MongoSingleton from "./database/mongoSingleton.js";
import SingletonEnvironment from "./env/singletonEnvironment.js";

Messages.initMessages(flags);

const persistence = flags.p;
if (persistence === "MONGO") {
  await MongoSingleton.getInstance();
}

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { host, port } = environment.env.api;

const server = http.createServer(app);
ioServer(server);

server.listen(port, () => {
  Messages.serverRunning(host,port);
});
