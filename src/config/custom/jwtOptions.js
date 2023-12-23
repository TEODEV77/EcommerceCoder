import { ExtractJwt } from "passport-jwt";
import { environment as env } from "../../env/config.js";

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies.token;
  }
  return token;
};

export const jwtOptions = {
  secretOrKey: env.dev.jwt.secret,
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
};



