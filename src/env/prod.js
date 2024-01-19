export default class ProdEnvironment {
  static envi = {
    api: {
      port: 3700,
      host: process.env.LOCALHOST,
    },
    mongo: {
      databaseName: process.env.DATABASE_NAME,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      cluster: process.env.CLUSTER,
      URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    }
  };
}
