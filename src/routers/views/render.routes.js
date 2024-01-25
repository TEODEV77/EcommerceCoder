import { Router } from "express";

import {
  authMiddlewarePassport,
  authorizeMiddlewarePassport,
} from "../../config/middleware/authMiddleware.js";
import CartsController from "../../controllers/carts.controller.js";
import UserDto from "../../dto/user.dto.js";

const renderRouter = Router();

renderRouter.get("/register", (req, res) => {
  res.render("register");
});

renderRouter.get("/login", (req, res) => {
  res.render("login");
});

renderRouter.get("/me", authMiddlewarePassport("jwt"), async (req, res) => {
  const cart = await CartsController.populateCart(req.user.cart);
  const amount = cart.products.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const user = new UserDto(req.user);
  user.amount = amount;
  if (user.provider != "No provider") {
    user.isLoggedWithProvider = true;
  }
  res.render("me", { car: cart.toJSON(), user });
});

export default renderRouter;
