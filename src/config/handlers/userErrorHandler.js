import EnumsError from "../../utils/EnumsError.js";

export const userErrorHandler = (err, req, res) => {
  switch (err.code) {
    case EnumsError.USER_ERROR.REQUIRED_FIELDS:
      res.status(400).json({ error: err.message, cause: err.cause });
      break;
    case EnumsError.USER_ERROR.INVALID_FIELDS:
      res.status(400).json({ error: err.message, cause: err.cause });
      break;
  }
};
