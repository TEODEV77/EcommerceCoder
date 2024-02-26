import { cartsService } from "../services/index.service.js";
import { addProductToCartLogic } from "../logic/cart.logic.js";
const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartsService.getAll();
    res.status(200).json({ status: "success", payload: carts });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
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
  const { quantity } = req.body;
  try {
    const body = await addProductToCartLogic(id,pid,quantity);
    await cartsService.update(id, body);
    res.status(201).json({ status: "success", payload: body});
  } catch (error) {
    next(error);
  }
};

const purchase = async (req, res, next) => {
  const { user } = req;
  try {
    res.status(201).json({ status: "success", payload: 'purchase' });
  } catch (error) {
    next(error);
  }
};

const deleteItemFromCart = async (req, res, next) => {
  try {
    res.status(201).json({ status: "success", payload: 'deleteItemFromCart' });
  } catch (error) {
    next(error);
  }
}

const deleteItemsFromCart = async (req, res, next) => {
  try {
    res.status(201).json({ status: "success", payload: 'deleteItemsFromCart' });
  } catch (error) {
    next(error);
  }
}

const deleteCart = async (req, res, next) => {
  try {
    res.status(201).json({ status: "success", payload: 'deleteCart' });
  } catch (error) {
    next(error);
  }
}

export default {
  getAllCarts,
  getCartById,
  populateCart,
  createCart,
  addProductToCart,
  purchase,
  deleteItemFromCart,
  deleteItemsFromCart,
  deleteCart
};
