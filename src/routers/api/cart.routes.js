import { Router } from "express";

import CartsController from "../../controllers/carts.controller.js";

const routerCart = Router();

routerCart.post("/carts", async (req, res, next) => {
  try {
    const cart = await CartsController.create();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.get("/carts/:id", async (req, res, next) => {
  const { id } = req.params;   
  try {
    const cart = await CartsController.getCartById(id);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.post("/carts/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;
  const {quantity} = req.body;
  try {
    const cart = await CartsController.addProduct(cid,pid,quantity);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

routerCart.delete("/carts/items/:cid", async (req, res, next) => {
  const { cid  } = req.params;
  try {
    await CartsController.deleteItemsFromCart(cid);
    res.status(200).json({message: "Products were removed from the cart"});
  } catch (error) {
    next(error);
  }
});


routerCart.delete("/carts/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;              
  try {
    await CartsController.deleteItemFromCart(cid,pid);
    res.status(200).json({message: "Product has been deleted"});
  } catch (error) {
    next(error);
  }
});

routerCart.delete("/carts/:cid", async (req, res, next) => {
  const { cid } = req.params;
  try {
    await CartsController.delete(cid);
    res.status(200).json({message: "Cart has been deleted"});
  } catch (error) {
    next(error);       
  }
});



routerCart.delete("/carts/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;                   
  try {
    await CartsController.deleteItemFromCart(cid,pid);
    res.status(200).json({message: "Product has been deleted"});
  } catch (error) {
    next(error);
  }
});



export default routerCart;
