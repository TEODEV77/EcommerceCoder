import { Router } from "express";
import {
  authMiddlewarePassport,
  authorizeMiddlewarePassport,
} from "../../../config/middleware/authMiddleware.js";

const routerAdminIo = Router();

routerAdminIo.get(
  "/admin",
  authMiddlewarePassport("jwt"),
  authorizeMiddlewarePassport(["admin"]),
  (req, res, next) => {
    res.render("admin", req.user);
  }
);

export default routerAdminIo;
