import { Router } from "express";

import { authMiddlewarePassport } from "../../config/middleware/authMiddleware.js";

const renderRouter = Router();

renderRouter.get("/register", (req, res) => {
  res.render("register");
});

renderRouter.get("/login", (req, res) => {
  res.render("login");
});

renderRouter.get("/me", authMiddlewarePassport("jwt"), (req, res) => {
  console.log(req.user);
  res.render("me", req.user);
});

renderRouter.get("/admin", authMiddlewarePassport("jwt"), (req, res) => {
  res.render("admin");
});

export default renderRouter;
