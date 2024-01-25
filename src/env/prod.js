export default class ProdEnvironment {
  static envi = {
    api: {
      port: process.env.DEV_PROD,
      host: process.env.LOCALHOST,
    },
    mongo: {
      databaseName: process.env.DATABASE_NAME,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      cluster: process.env.CLUSTER,
      URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    },
    cookie: {
      secret: process.env.COOKIE_SECRET,
      options: {
        maxAge: 7000 * 60,
        signed: process.env.COOKIE_SIGNED,
        httpOnly: process.env.COOKIE_HTTP_ONLY,
      },
    },
    github: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.CALLBACK_URL}/api/github/auth/callback`,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  };
}
