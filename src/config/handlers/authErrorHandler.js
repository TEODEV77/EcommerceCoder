import EnumsError from "../../utils/EnumsError.js";

export const authErrorHandler = (err, req, res) => {
  switch (err.code) {
    case EnumsError.AUTH_ERROR.UNAUTHENTICATED:
      res.status(401).json({ error: err.message, cause: err.cause });
      break;
    case EnumsError.AUTH_ERROR.UNAUTHORIZED:
      res.status(403).json({ error: err.message, cause: err.cause });
      break;
  }
};
