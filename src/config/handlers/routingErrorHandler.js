import EnumsError from "../../utils/EnumsError.js";

export const routingErrorHandler = (err, req, res) => {
  switch (err.code) {
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_DEFINED:
      res.status(500).json({ error: err.message });
      break;
    case EnumsError.ROUTING_ERROR.ROUTE_NOT_FOUND:
      res.status(500).json({ error: err.message });
      break;
  }
};
