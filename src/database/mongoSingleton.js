import mongoose from "mongoose";
import { envFactory } from '../env/index.js';
import { flags } from '../utils.js';
import ColorsMessage from "../utils/colors.js";
export default class MongoSingleton {
  constructor() {
    const { envi } = envFactory(flags.e);
    const { URI } = envi.mongo; 
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
