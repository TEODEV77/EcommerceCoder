import EnumsError from "../../utils/EnumsError.js";

export const dbErrorHandler = (err, req, res) => {
  switch (err.code) {
    case EnumsError.DB_ERROR.WRONG_CONNECTION:
      res.status(500).json({ error: err.message });
      break;
    case EnumsError.DB_ERROR.WRONG_CREDENTIALS:
      res.status(500).json({ error: err.message });
      break;
  }
};
