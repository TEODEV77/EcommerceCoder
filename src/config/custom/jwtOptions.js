import { ExtractJwt } from "passport-jwt";
import SingletonEnvironment from "../../env/singletonEnvironment.js";
import { flags } from "../../utils.js";

const { environment } = SingletonEnvironment.getInstance(flags.environ);
const { secret } = environment.env.jwt;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies.token;
  }
  return token;
};

export const jwtOptions = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
};



