import { authToken, recoverToken } from "./jwtTokens.js";

export const generateToken = (user, type, expiresIn) => {
  switch (type) {
    case "auth":
      return authToken(user, expiresIn);
    case 'recover':
      return recoverToken(user, expiresIn);
    default:
      break;
  }
};

