import mongoose from "mongoose";

import { environment as env} from "../env/config.js";

export const initMongoDb = async () => {
  try {
    await mongoose.connect(env.dev.mongo.URI);
    console.log(`Database connected`);
  } catch (error) {
    console.log(error.message);
  }
};

