import { environment as env } from "../../env/config.js";

export const gitHubOptions = {
  clientID: env.dev.github.clientID,
  clientSecret: env.dev.github.clientSecret,
  callbackURL: env.dev.github.callbackURL,
};


