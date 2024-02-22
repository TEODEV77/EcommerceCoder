import { Router } from "express";

import {
  authMiddlewarePassport,
  authorizeMiddlewarePassport,
} from "../../config/middleware/authMiddleware.js";
import CartsController from "../../controllers/carts.controller.js";
import UserDto from "../../dto/user.dto.js";
import { validateToken } from "../../utils/jwtTokens.js";

const renderRouter = Router();

renderRouter.get("/register", (req, res) => {
  res.render("register");
});

renderRouter.get("/login", (req, res) => {
  res.render("login");
});

renderRouter.get("/emailSent", (req, res) => {
  res.render("emailSent");
});

renderRouter.get("/userError", (req, res) => {
  res.render("noUser");
});

renderRouter.get("/recover", async (req, res) => {

  const token = req.query.token;
  validateToken(token)
    .then((userToken) => {
      if (userToken.type != "recover") {
        return res.render("tokenInvalid");
      } else {
        return res.render('recoverPass', {id: userToken.id, email: userToken.email});
      }
    })
    .catch((error) => {
      if (error.message == "jwt expired") {
        return res.render("tokenExpired");
      }
      return res.render("tokenInvalid");
    });
});

renderRouter.get('/mail', (req,res,next) => {
  res.render('recover');
})

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
