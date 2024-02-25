import { cartsService } from "../services/index.service.js";
import { addProductToCartLogic } from "../logic/cart.logic.js";
const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartsService.getAll();
    res.status(200).json({ status: "success", payload: carts });
  } catch (error) {
    next(error);
  }
};

const getCartById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = { _id: id };
    const cart = await cartsService.getBy(query);
    res.status(200).json({ status: "success", payload: cart });
  } catch (error) {
    next(error);
  }
};

const populateCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = { _id: id };
    const cartPopulated = await cartsService.populate(query);
    res.status(200).json({ status: "success", payload: cartPopulated });
  } catch (error) {
    next(error);
  }
};

const createCart = async (req, res, next) => {
  try {
    const body = { products: [] };
    const cart = await cartsService.save(body);
    res.status(201).json({ status: "success", payload: cart });
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next) => {
  const { id, pid } = req.params;
  //const { quantity } = req.body;
  try {
    const body = await addProductToCartLogic(id,pid,5);
    const cart = await cartsService.save(body);
    res.status(201).json({ status: "success", payload: cart });
  } catch (error) {
    next(error);
  }
};



export default {
  getAllCarts,
  getCartById,
  populateCart,
  createCart,
  addProductToCart,
};
