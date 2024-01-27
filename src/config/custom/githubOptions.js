import SingletonEnvironment from "../../env/singletonEnvironment.js";
import { flags } from "../../utils.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { clientID, clientSecret, callbackURL } = environment.env.github;

export const gitHubOptions = {
  clientID,
  clientSecret,
  callbackURL,
};


