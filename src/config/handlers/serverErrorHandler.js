import EnumsError from "../../utils/EnumsError.js";

export const serverErrorHandler = (err, req, res) => {
  switch (err.code) {
    case EnumsError.SERVER.INTERNAL_ERROR:
      res.status(500).json({ error: err.message });
      break;
    case EnumsError.SERVER.BAD_REQUEST:
      res.status(500).json({ error: err.message });
      break;
  }
};
