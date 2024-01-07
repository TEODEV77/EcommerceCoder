import { Router } from "express";

import CartsController from "../../controllers/carts.controller.js";

const routerCart = Router();

routerCart.post("/cart", async (req, res, next) => {
  try {
    const cart = await CartsController.create();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.get("/cart/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await CartsController.getCartById(id);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.post("/cart/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;
  try {
    const cart = await CartsController.addProduct(cid,pid,5);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.delete("/cart/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await CartsController.delete(id);
    res.status(200).json({message: "Cart has been deleted"});
  } catch (error) {
    next(error);
  }
});

routerCart.delete("/cart/items/:cid", async (req, res, next) => {
  const { cid  } = req.params;
  try {
    await CartsController.deleteItemsFromCart(cid);
    res.status(200).json({message: "Products were removed from the cart"});
  } catch (error) {
    next(error);
  }
});

routerCart.delete("/cart/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;
  try {
    await CartsController.deleteItemFromCart(cid,pid);
    res.status(200).json({message: "Product has been deleted"});
  } catch (error) {
    next(error);
  }
});



export default routerCart;
