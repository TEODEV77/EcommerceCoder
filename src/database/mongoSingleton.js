import mongoose from "mongoose";
import { flags } from "../utils.js";
import ColorsMessage from "../utils/colors.js";
import SingletonEnvironment from "../env/singletonEnvironment.js";
import { getLogger } from "../config/logger.js";

export default class MongoSingleton {
  static logger = getLogger();

  constructor() {
    const { environment } = SingletonEnvironment.getInstance(flags.environ);
    const { URI } = environment.env.mongo;
    try {
      this.connection = mongoose.connect(URI);
      MongoSingleton.logger.info(
        `${ColorsMessage.title("Database status: ")}${ColorsMessage.value(
          "Database connected"
        )}`
      );
    } catch (error) {
      MongoSingleton.logger.error(`${ColorsMessage.value("There was a problem connecting to the database")}`);
    }
  }

  static getInstance() {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }
}
