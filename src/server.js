import http from "http";

import app from "./express.js";
import { ioServer } from "./socket.js";
import { environment as env } from "./env/config.js";
import { initMongoDb } from "./database/mongo.js";

await initMongoDb();
const server = http.createServer(app);
ioServer(server);

server.listen(env.dev.api.port, () => {
  console.log(`Server running at ${env.dev.api.host}:${env.dev.api.port}`);
});
