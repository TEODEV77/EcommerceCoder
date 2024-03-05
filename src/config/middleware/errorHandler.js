import EnumsError from "../../utils/EnumsError.js";
import { genericErrorHandler } from "../custom/genericError.js";
import { authErrorHandler } from "../handlers/authErrorHandler.js";
import { dbErrorHandler } from "../handlers/dbErrorHandler.js";
import { routingErrorHandler } from "../handlers/routingErrorHandler.js";
import { serverErrorHandler } from "../handlers/serverErrorHandler.js";
import { userErrorHandler } from "../handlers/userErrorHandler.js";

export const errorHandler = (err, req, res, next) => {
  console.log(err);
  switch (err.idx) {
    case EnumsError.USER_ERROR.IDX:
      userErrorHandler(err, req, res);
      break;
    case EnumsError.AUTH_ERROR.IDX:
      authErrorHandler(err, req, res);
      break;
    case EnumsError.DB_ERROR.IDX:
      dbErrorHandler(err, req, res);
      break;
    case EnumsError.ROUTING_ERROR.IDX:
      routingErrorHandler(err, req, res);
      break;
    case EnumsError.SERVER.IDX:
      serverErrorHandler(err, req, res);
      break;
    default:
      genericErrorHandler(err, req, res);
      break;
  }
};
