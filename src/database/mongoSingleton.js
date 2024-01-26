import mongoose from "mongoose";
import { flags } from '../utils.js';
import ColorsMessage from "../utils/colors.js";
import SingletonEnvironment from "../env/singletonEnvironment.js";

export default class MongoSingleton {
  constructor() {
    const { environment } = SingletonEnvironment.getInstance(flags.environ);
    const { URI } = environment.env.mongo
    this.connection = mongoose.connect(URI);
    console.log(ColorsMessage.title(`Database status:${ColorsMessage.value('Database connected')}`));
  }

  static getInstance() {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }

}
