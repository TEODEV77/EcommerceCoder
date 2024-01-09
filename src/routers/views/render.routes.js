import { Router } from "express";

import { authMiddlewarePassport, authorizeMiddlewarePassport } from "../../config/middleware/authMiddleware.js";
import CartsController from "../../controllers/carts.controller.js";

const renderRouter = Router();

renderRouter.get("/register", (req, res) => {
  res.render("register");
});

renderRouter.get("/login", (req, res) => {
  res.render("login");
});

renderRouter.get("/me", authMiddlewarePassport("jwt"), async (req, res) => {
  const cart = await CartsController.populateCart(req.user.cart);
  res.render("me", {car: cart.toJSON(), userInfo: req.user});
});

renderRouter.get("/admin", authMiddlewarePassport("jwt"), authorizeMiddlewarePassport(['admin']), (req, res) => {
  res.render("admin");
});

export default renderRouter;
